import { memo, useState } from "react";
import "./style.scss";
import useShoppingCart from "hooks/useShoppingCart";
import { ReactSession } from "react-client-session";
import { SESSION_KEYS } from "utils/constant";
import { useDispatch } from "react-redux";
import { setCart } from "../../redux/commonSlide";

const Quantity = ({ hasAddToCart = true, product, initQuantity }) => {
  const { addToCart } = useShoppingCart();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(initQuantity || 1);

  const incrementQuantity = (isPlus) => {
    if (!isPlus && quantity === 0) {
      return;
    }

    const newQty = isPlus ? quantity + 1 : quantity - 1;
    if (newQty < 0) return;

    setQuantity(newQty);

    // when used inside shopping cart (no add button), update session cart and redux
    if (!hasAddToCart && product) {
      const cart = ReactSession.get(SESSION_KEYS.CART) || { products: [], totalPrice: 0, totalQuantity: 0 };
      const products = cart.products.map((p) => {
        if (p.product.id === product.id) {
          return { ...p, quantity: newQty };
        }
        return p;
      });

      const totalPrice = products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
      const totalQuantity = products.reduce((sum, item) => sum + item.quantity, 0);

      const newCart = { products, totalPrice, totalQuantity };
      ReactSession.set(SESSION_KEYS.CART, newCart);
      dispatch(setCart(newCart));
    }
  };

  return (
    <div className="quantity-container">
      <div className="quantity">
        <span className="qtybtn" onClick={() => incrementQuantity(false)}>
          -
        </span>
        <input type="number" value={quantity} readOnly />
        <span className="qtybtn" onClick={() => incrementQuantity(true)}>
          +
        </span>
      </div>
      {hasAddToCart && (
        <button
          type="button"
          className="button-submit"
          onClick={() => {
            addToCart(product, quantity);
            const curCart = ReactSession.get(SESSION_KEYS.CART);
            console.log(curCart);
          }}
        >
          Thêm vào giỏ hàng
        </button>
      )}
    </div>
  );
};

export default memo(Quantity);