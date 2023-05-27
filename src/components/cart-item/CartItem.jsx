import "./cart-item.style.scss";

const CartItem = ({ name, imageUrl }) => {
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
      </div>
    </div>
  );
};

export default CartItem;
