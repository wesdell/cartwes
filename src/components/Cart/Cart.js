import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, cleanCart } from "../../actions/shoppingActions";
import CartItem from "../CartItem/CartItem";
import Total from "../Total/Total";
import styles from "./cart.module.css";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let { cart } = state.cart;

  return (
    <div>
      <h2 className="title">Cart</h2>
      <hr />
      <div className={styles.cart_container}>
        {cart.length > 0 ? (
          <div className={styles.cart_total}>
            <div className={styles.cart_total_content}>
              <p>Total: </p>
              <Total price={true} />
            </div>
          </div>
        ) : null}
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              id={item.id}
              url={item.url}
              price={item.price}
              quantity={item.quantity}
              removeOne={() => dispatch(removeFromCart(Number(item.id)))}
              removeAll={() => dispatch(removeFromCart(Number(item.id), true))}
            />
          ))
        ) : (
          <p className="text-center">Any items in cart</p>
        )}
        {cart.length > 0 ? (
          <div className="flex justify-end mb-6">
            <div className="btn">
              <button onClick={() => dispatch(cleanCart())}>Clean cart</button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
