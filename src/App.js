import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import Cart from "./components/Cart/Cart";
import Course from "./components/Course/Course";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Link from "./components/Link/Link";
import NotFound from "./components/NotFound/NotFound";
import ProductItem from "./components/ProductItem/ProductItem";
import Products from "./components/Products/Products";
import "./App.css";

function App() {
  const state = useSelector((state) => state);
  let { products } = state.cart;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Hero />
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                  <Products>
                    {products.length > 0 ? (
                      products
                        .slice(0, 3)
                        .map((product) => (
                          <Course
                            key={product.id}
                            name={product.name}
                            id={product.id}
                            url={product.url}
                          />
                        ))
                    ) : (
                      <p>Any products to show</p>
                    )}
                  </Products>
                  <div className="flex justify-center items-center">
                    <Link to="/products" text="View all products" />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                  <Products>
                    {products.length > 0 ? (
                      products.map((product) => (
                        <Course
                          key={product.id}
                          name={product.name}
                          id={product.id}
                          url={product.url}
                        />
                      ))
                    ) : (
                      <p>Any products to show</p>
                    )}
                  </Products>
                </div>
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <Hero />
                <ProductItem />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Hero />
                <Cart />
              </>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
