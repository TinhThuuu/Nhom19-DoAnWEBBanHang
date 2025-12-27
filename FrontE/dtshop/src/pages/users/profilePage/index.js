import { memo, useEffect, useState } from 'react';
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom';
import { ROUTERS } from 'utils/router';
import { SESSION_KEYS } from 'utils/constant';
import './style.scss';
import { getOrdersByEmailAPI } from 'api/orderPage';
import { formater } from 'utils/formater';

const ProfilePage = () => {
        const navigate = useNavigate();
        const [orders, setOrders] = useState([]);
        const [loading, setLoading] = useState(false);
        const [user] = useState(() => ReactSession.get(SESSION_KEYS.USER) || null);

        const STATUS = {
            ORDERED: 'Đã đặt',
            PREPARING: 'Lên đơn',
            DILIVERED: 'Đã giao hàng',
            CANCELLED: 'Hủy đơn'
        };

        const handleLogout = () => {
            try {
                // remove via library
                if (ReactSession.remove) ReactSession.remove(SESSION_KEYS.USER);
            } catch (e) {
                // ignore
            }
            // also remove directly from sessionStorage to be certain
            try { window.sessionStorage.removeItem(SESSION_KEYS.USER); } catch (e) {}

            // optional: clear other session keys
            try { ReactSession.remove && ReactSession.remove(SESSION_KEYS.CART); } catch (e) {}

            // navigate to home and reload to ensure header updates
            navigate('/');
            setTimeout(() => window.location.reload(), 100);
        };

        useEffect(() => {
            const fetchOrders = async () => {
            if (!user?.email) return;
                setLoading(true);
                try {
                    const res = await getOrdersByEmailAPI(user.email);
                    const data = res?.data || [];
                    setOrders(data);
                } catch (e) {
                    console.error('fetch orders failed', e);
                } finally {
                    setLoading(false);
                }
            };
            fetchOrders();
        }, [user?.email]);

        return <>
        <div className="profile-page">
            <h1>Profile</h1>
            <p>Xin chào {user?.name || 'khách'}</p>
            <div className="profile-actions">
                <button className="btn-logout" onClick={handleLogout}>Đăng xuất</button>
            </div>

            <section className="order-history">
                <h2>Lịch sử đặt hàng</h2>
                {loading ? (
                    <p>Đang tải...</p>
                ) : orders.length === 0 ? (
                    <p>Không có đơn hàng nào.</p>
                ) : (
                    <div className="orders-list">
                        {orders.map((o) => (
                            <div className="order-item" key={o.id}>
                                <div className="order-head">
                                    <div>Ngày: {new Date(o.date).toLocaleString()}</div>
                                    <br></br>
                                    <div>Tổng: {formater(o.total)}</div>
                                    <div>Trạng thái: {STATUS[o.status] || o.status}</div>
                                </div>
                                <ul className="order-items">
                                    {o.items?.map((it, idx) => (
                                        <li key={idx}>{it.productName} x {it.quantity} - {formater(it.price)}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
        </>
};

export default memo(ProfilePage);