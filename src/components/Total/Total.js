import { useSelector } from "react-redux";

const Total = ({ quantity = false, price = false }) => {
  const state = useSelector((state) => state);
  let { cart } = state.cart;
  let totalPrice = 0;
  let totalCant = 0;

  cart.forEach((item) => (totalPrice += item.price * item.quantity));
  cart.forEach((item) => (totalCant += item.quantity));

  return (
    <>
      {price ? <div>${totalPrice}.00</div> : null}
      {quantity ? <div>{totalCant}</div> : null}
    </>
  );
};

export default Total;
