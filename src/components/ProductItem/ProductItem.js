import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addToCart } from "../../actions/shoppingActions";
import Link from "../Link/Link";
import styles from "./productItem.module.css";

const ProductItem = () => {
  let { id } = useParams();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let { products } = state.cart;

  let validId = products.find((product) => product.id === Number(id));

  if (!validId) return;

  let item = products.filter((product) => product.id === Number(id));

  return (
    <section>
      <div className={styles.item_container}>
        <div className={styles.item_img}>
          <img src={require(`../../${item[0].url}`)} alt={item[0].name} />
        </div>
        <div className={styles.item_content}>
          <h2 className="font-bold text-center my-2 text-slate-800">
            {item[0].name}
          </h2>
          <p>
            Terminated principles sentiments of no pianoforte if projection
            impossible. Horses pulled nature favour number yet highly his has
            old. Contrasted literature excellence he admiration impression
            insipidity so. Scale ought who terms after own quick since.
          </p>
          <p className="font-bold my-1">Price: ${item[0].price}.00</p>
          <div className="flex justify-between items-center">
            <div className="btn">
              <button onClick={() => dispatch(addToCart(Number(id)))}>
                Add to cart
              </button>
            </div>
            <div className="ml-4">
              <Link to="/products" text="See all products" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
