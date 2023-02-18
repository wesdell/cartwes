import Link from "../Link/Link";
import { ReactComponent as CartwesSVG } from "../../assets/svg/cartwes.svg";
import { ReactComponent as CartSVG } from "../../assets/svg/cart.svg";
import styles from "./header.module.css";
import Total from "../Total/Total";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((state) => state);
  let { cart } = state.cart;

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div>
          <Link to="/" text="Cartwes" Icon={CartwesSVG} />
        </div>
        <nav>
          <Link to="/cart" Icon={CartSVG} />
          {cart.length > 0 ? (
            <div className={styles.header_total}>
              <div>
                <Total quantity={true} />
              </div>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
};

export default Header;
