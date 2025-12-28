import { Quantity } from "component";
import { memo, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { formater } from "utils/formater";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";
import { ReactSession } from "react-client-session";
import { SESSION_KEYS } from "utils/constant";
import useShoppingCart from "hooks/useShoppingCart";

const ShoppingCartPage = () => {
  const navigate = useNavigate();
  const { removeCart } = useShoppingCart();
  const [cart, setCart] = useState(
    ReactSession.get(SESSION_KEYS.CART) || { products: [], totalPrice: 0, totalQuantity: 0 }
  );

  return (
    <>
      <Breadcrumb name="Giỏ hàng" />
      <div className="container">
        <div className="table__cart">
          {(!cart || !cart.products || cart.products.length === 0) ? (
            <div className="empty-cart">_Giỏ hàng trống_</div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {cart.products.map(({ product, quantity }, key) => (
                  <tr key={key}>
                    <td className="shopping__cart__item">
                      <img src={product.img} alt="product-pic" />
                      <h4>{product.name}</h4>
                    </td>
                    <td>{formater(product.price)}</td>
                    <td>
                      <Quantity product={product} initQuantity={quantity} hasAddToCart={false} />
                    </td>
                    <td>{formater(product.price * quantity)}</td>
                    <td className="icon_close" onClick={() => setCart(removeCart(product.id))}>
                      <AiOutlineClose />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="shopping__continue">
              <h3>Mã giảm giá</h3>
              <div className="shopping__discount">
                <input placeholder="Nhập mã giảm giá" />
                <button type="button" className="button-submit">Áp dụng</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="shopping__checkout">
              <h2>Tổng đơn:</h2>
              <ul>
                <li>Số lượng: <span>{cart.totalQuantity || 0}</span></li>
                <li>Thành tiền: <span>{formater(cart.totalPrice || 0)}</span></li>
              </ul>
              <button
                type="button"
                className="button-submit"
                onClick={() => cart.products && cart.products.length > 0 && navigate(ROUTERS.USER.CHECKOUT)}
                disabled={!(cart.products && cart.products.length > 0)}
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ShoppingCartPage);