import Button from "../genral-button";
import "./product-card.style.scss";

const ProductCard = ({ name, price, imageUrl }) => {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button btnType="inverted">Add to card</Button>
    </div>
  );
};

export default ProductCard;
