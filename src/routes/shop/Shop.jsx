import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/prducts";
import ProductCard from "../../components/product-card";
import "./shop.style.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="prodcuts-container">
      {products.map(({ id, ...product }) => (
        <ProductCard key={id} {...product} />
      ))}
    </div>
  );
};

export default Shop;
