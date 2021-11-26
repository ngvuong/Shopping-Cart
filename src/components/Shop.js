import React from "react";
import Cart from "./Cart";
import Product from "./Product";

export default function Shop() {
  const products = [
    { name: "Product1" },
    { name: "Product2" },
    { name: "Product3" },
  ];
  const productList = products.map((product, i) => {
    return <Product key={i} name={product.name} />;
  });
  return (
    <div>
      Shop
      <Cart />
      <div className="product-list">{productList}</div>
    </div>
  );
}
