import styles from "./cartItem.module.css";

const CartItem = ({
  id,
  name,
  url,
  price,
  quantity = 1,
  removeOne,
  removeAll,
}) => {
  return (
    <div className={styles.cart_items_container}>
      <p>Units: {quantity}</p>
      <div className={styles.cart_item_img}>
        <img src={require(`../../${url}`)} alt={name} />
      </div>
      <h5 className="sm:mr-3 lg:mr-6">{name}</h5>
      <p className="sm:mr-3 lg:mr-6">
        ${price}.00 {`x${quantity}`}
      </p>
      <button onClick={() => removeOne(id)} className="btn sm:mr-3 lg:mr-6">
        Remove One
      </button>
      <button
        onClick={() => removeAll(id, true)}
        className="btn sm:mr-3 lg:mr-6"
      >
        Remove All
      </button>
    </div>
  );
};

export default CartItem;
