import "./product.style.scss";
import { useContext } from "react";
import Button from "../genral-button";
import { CartContext } from "../../contexts/cart";

const Product = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="category-cart-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button btnType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default Product;
