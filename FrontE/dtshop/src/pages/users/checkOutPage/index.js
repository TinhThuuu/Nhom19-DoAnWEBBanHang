import { memo, useState } from "react";
import { formater } from "utils/formater";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { ReactSession } from "react-client-session";
import { SESSION_KEYS } from "utils/constant";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";
import { postOrderAPI } from "api/orderPage";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const cart = ReactSession.get(SESSION_KEYS.CART) || { products: [], totalPrice: 0 };

  const { mutate: postOrder } = useMutation({
    mutationFn: postOrderAPI,
    onSuccess: (res, variables) => {
      const paymentMethod = variables.paymentMethod;
      alert("Đặt hàng thành công");
      ReactSession.remove(SESSION_KEYS.CART);
      if (paymentMethod === 'BANK') {
        ReactSession.set('LAST_ORDER', res?.data || null);
        navigate(ROUTERS.USER.PAYMENT);
      } else {
        navigate(ROUTERS.USER.HOME);
      }
    },
    onError: (err) => {
      alert(err?.response?.data?.message || 'Đặt hàng thất bại');
    }
  });

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState('COD');

  const [errors, setErrors] = useState({
    fullName: "",
    address: "",
    phone: "",
    email: "",
  });

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      address: "",
      phone: "",
      email: "",
    };

    let isValid = true;
    if (!fullName) {
      newErrors.fullName = "Vui lòng nhập tên.";
      isValid = false;
    }
    if (!address) {
      newErrors.address = "Vui lòng nhập địa chỉ.";
      isValid = false;
    }
    if (!phone) {
      newErrors.phone = "Vui lòng nhập số điện thoại.";
      isValid = false;
    }
    if (!email) {
      newErrors.email = "Vui lòng nhập email.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      postOrder({
        fullName,
        address,
        phone,
        email,
        note,
        paymentMethod,
        products: cart.products.map(({ product, quantity }) => ({
          productId: product.id,
          quantity,
        })),
      });

      setErrors({
        fullName: "",
        address: "",
        phone: "",
        email: "",
      });
    }
  };

  return (
    <>
      <Breadcrumb name="Thanh toán" />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="checkout__input">
                <label>
                  Họ và tên: <span className="required">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nhập họ và tên"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {errors.fullName && (
                  <p className="error-message">{errors.fullName}</p>
                )}
              </div>
              <div className="checkout__input">
                <label>
                  Địa chỉ: <span className="required">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nhập địa chỉ"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                {errors.address && (
                  <p className="error-message">{errors.address}</p>
                )}
              </div>
              <div className="checkout__input__group">
                <div className="checkout__input">
                  <label>
                    Điện thoại: <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập số điện thoại"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && (
                    <p className="error-message">{errors.phone}</p>
                  )}
                </div>
                <div className="checkout__input">
                  <label>
                    Email: <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Nhập email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="checkout__input">
                <label>Ghi chú:</label>
                <textarea
                  rows={15}
                  placeholder="Nhập ghi chú"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              <div className="checkout__input">
                <label>Phương thức thanh toán:</label>
                <div className="payment-options">
                  <label>
                    <input type="radio" name="payment" value="COD" checked={paymentMethod === 'COD'} onChange={() => setPaymentMethod('COD')} /> Thanh toán khi nhận hàng
                  </label>
                  <label>
                    <input type="radio" name="payment" value="BANK" checked={paymentMethod === 'BANK'} onChange={() => setPaymentMethod('BANK')} /> Chuyển khoản ngân hàng
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="checkout__order">
                <h3>Đơn hàng</h3>
                <ul>
                  {cart.products.map(({ product, quantity }) => (
                    <li key={product.id}>
                      <span>{product.name}</span>
                      <b>
                        {formater(product.price)} ({quantity})
                      </b>
                    </li>
                  ))}
                  <li className="checkout__order__subtotal">
                    <h3>Tổng đơn</h3>
                    <b>{formater(cart.totalPrice)}</b>
                  </li>
                </ul>
                <button type="submit" className="button-submit">
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default memo(CheckoutPage);