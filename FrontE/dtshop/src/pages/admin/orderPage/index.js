import { memo, useEffect, useState } from "react";
import "./style.scss";
import { formater } from "utils/formater";
import { getOrdersAPI, updateOrderStatusAPI } from "api/orderPage";

const STATUS = {
  ORDERED: {
    key: "ORDERED",
    label: "Đã đặt",
    className: "orders__dropdown-item",
  },
  PREPARING: {
    key: "PREPARING",
    label: "Lên đơn",
    className: "orders__dropdown-item",
  },
  DILIVERED: {
    key: "DILIVERED",
    label: "Đã giao hàng",
    className: "orders__dropdown-item",
  },
  CANCELLED: {
    key: "CANCELLED",
    label: "Hủy đơn",
    className: "orders__dropdown-item orders__dropdown-item--danger",
  },
};

const OrderPageAdPage = () => {
  const [orders, setOrders] = useState([]);
  const [activedDropdown, setActivedDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDropdown = event.target.closest(".orders__dropdown");
      if (!isDropdown) {
        setActivedDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await getOrdersAPI();
        const data = res?.data || [];
        setOrders(data);
      } catch (err) {
        console.error('Failed to fetch orders', err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container">
      <div className="orders">
        <h2>Quản lý đơn hàng:</h2>

        <div className="orders__content">
          <table className="orders__table">
            <thead>
              <tr>
                <th>Mã đơn hàng</th>
                <th>Tổng đơn</th>
                <th>Khách hàng</th>
                <th>Ngày đặt</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, i) => (
                <tr key={i}>
                  <td>
                    <span>{item.id}</span>
                  </td>
                  <td>{formater(item.total)}</td>
                  <td>{item.customerName}</td>
                  <td>{new Date(item.date).toLocaleDateString()}</td>
                  <td>
                    <div className="orders__dropdown">
                      <button
                        className={`orders__action-buton`}
                        onClick={() => setActivedDropdown(item.id)}
                      >
                        {Object.values(STATUS).find(s => s.key === item.status)?.label || item.status}
                        <span className="arrow">▽</span>
                      </button>
                      {activedDropdown === item.id && (
                        <div className="orders__dropdown-menu">
                          {Object.values(STATUS).map((status) => (
                            <button
                              key={status.key}
                              className={status.className}
                              onClick={async () => {
                                try {
                                  await updateOrderStatusAPI(item.id, status.key);
                                  setOrders((prev) => prev.map((o) => o.id === item.id ? { ...o, status: status.key } : o));
                                } catch (err) {
                                  console.error('Update status failed', err);
                                } finally {
                                  setActivedDropdown(null);
                                }
                              }}
                            >
                              {status.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="orders__footer">
          <div className="orders__pagination">
            <div className="orders__page-numbers">
              <button className="orders__page-btn">←</button>
              <button className="orders__page-btn orders__page-btn--active">
                1
              </button>
              <button className="orders__page-btn">2</button>
              <button className="orders__page-btn">3</button>
              <button className="orders__page-btn">4</button>
              <button className="orders__page-btn">5</button>
              <button className="orders__page-btn">→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(OrderPageAdPage);