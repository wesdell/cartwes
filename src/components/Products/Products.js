import styles from "./products.module.css";

const Products = ({ children }) => {
  return (
    <div>
      <h2 className="title">Products</h2>
      <hr />
      <div className={styles.products_container}>{children}</div>
    </div>
  );
};

export default Products;
