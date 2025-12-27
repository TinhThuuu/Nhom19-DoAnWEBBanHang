import { ReactSession } from "react-client-session";
import { SESSION_KEYS } from "utils/constant";

const useShoppingCart = () => {
  const addToCart = (product, quantity) => {
    const cart = ReactSession.get(SESSION_KEYS.CART);
    const products = cart ? cart.products : [];
    const productIndex = products?.findIndex(
      (c) => c.product.id === product.id
    );
    if (productIndex > -1) {
      products[productIndex].quantity += quantity;
    } else {
      products.push({
        product,
        quantity,
      });
    }

    const totalPrice = products.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);

    const newCart = {
      totalQantity: products.length,
      totalPrice,
      products,
    };

    ReactSession.set(SESSION_KEYS.CART, newCart);
    alert("Đã thêm sản phẩm vào giỏ hàng!");
  };

  return { addToCart };
};

export default useShoppingCart;