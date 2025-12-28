import { memo } from "react";
import './style.scss'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { generatePath, Link } from 'react-router-dom';
import { formater } from 'utils/formater';
import { ROUTERS } from "utils/router";
import useShoppingCart from 'hooks/useShoppingCart';



const ProductsCard = ({ product }) => {
  const { addToCart } = useShoppingCart();

  return (
    <>
      <div className="featured_item pl-pr-10">
        <div
          className="featured_item_pic"
          style={{
            backgroundImage: `url(${generatePath(product.img)})`,
          }}
        >
          <ul className="featured_item_pic_hover">
            <li>
              <Link to={generatePath(ROUTERS.USER.PRODUCT, { id: product.id })} aria-label="View product">
                <AiOutlineEye />
              </Link>
            </li>
            <li>
              <button type="button" className="icon-btn" onClick={() => addToCart(product, 1)} aria-label="Add to cart">
                <AiOutlineShoppingCart />
              </button>
            </li>
          </ul>
        </div>
        <div className="featured_item_text">
          <h6>
            <Link to={generatePath(ROUTERS.USER.PRODUCT, { id: product.id })}>{product.name}</Link>
          </h6>
          <h5>{formater(product.price)}</h5>
        </div>
      </div>
    </>
  );
};


export default memo(ProductsCard)