import React, { useState } from "react";
import Cart from "./Cart";
import Product from "./Product";

const products = [
  { id: 1, name: "Product1" },
  { id: 2, name: "Product2" },
  { id: 3, name: "Product3" },
];

export default function Shop() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addItem = (product) => {
    if (!cartItems.includes(product)) {
      setCartItems((items) => {
        return [...items, product];
      });
      setCartItemCount(cartItemCount + 1);
    }
  };

  const productList = products.map((product, i) => {
    return (
      <Product
        key={product.id}
        name={product.name}
        product={product}
        onClick={addItem}
      />
    );
  });
  return (
    <div>
      Shop
      <Cart itemCount={cartItemCount} products={cartItems} />
      <div className="product-list">{productList}</div>
    </div>
  );
}
