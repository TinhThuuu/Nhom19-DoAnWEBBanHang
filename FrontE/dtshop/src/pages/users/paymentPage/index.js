import { memo } from "react";
import { ReactSession } from "react-client-session";
import { formater } from "utils/formater";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";
import "./style.scss";

const PaymentPage = () => {
  const navigate = useNavigate();
  const order = ReactSession.get("LAST_ORDER");

  const goHome = () => navigate(ROUTERS.USER.HOME);

  if (!order) {
    return (
      <div className="payment-page container">
        <h2>Hướng dẫn thanh toán</h2>
        <p>Không có đơn hàng để hiển thị. Vui lòng quay lại trang chủ hoặc đặt hàng mới.</p>
        <button onClick={goHome} className="button-submit">
          Về trang chủ
        </button>
      </div>
    );
  }

  const totalPrice =
    order.details?.reduce(
      (sum, d) => sum + (d.product?.price ?? 0) * d.quantity,
      0
    ) ?? 0;

  return (
    <div className="payment-page container">
      <h2>Hướng dẫn chuyển khoản</h2>
      <p>Vui lòng chuyển khoản theo nội dung và thông tin sau:</p>

      <ul>
        <li>Ngân hàng: SHB</li>
        <li>Chủ tài khoản: LE VAN TINH</li>
        <li>Số tài khoản: 0976580867</li>
        <li>Nội dung: Đơn hàng #{order.id} - {order.email}</li>
      </ul>

      <h3>Tóm tắt đơn</h3>
      <p>Khách hàng: {order.fullName}</p>
      <p>Địa chỉ: {order.address}</p>
      <p>Email: {order.email}</p>
      <p>Số điện thoại: {order.phone}</p>

      <h4>Mặt hàng</h4>
      <ul>
        {order.details?.map((d) => (
          <li key={d.id}>
            {d.product?.name ?? `SP#${d.product_id}`}
            {" - "}
            {d.quantity} x {formater(d.product?.price ?? 0)}
          </li>
        ))}
      </ul>

      <p><strong>Tổng tiền:</strong> {formater(totalPrice)}</p>

      <button onClick={goHome} className="button-submit">
        Hoàn tất
      </button>
    </div>
  );
};

export default memo(PaymentPage);
