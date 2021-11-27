import React, { useState } from "react";
import Cart from "./Cart";
import Product from "./Product";

const products = [
  { id: 1, name: "Product1" },
  { id: 2, name: "Product2" },
  { id: 3, name: "Product3" },
];

export default function Shop() {
  const itemCountInStore = parseInt(sessionStorage.getItem("count"));
  const cartItemsInStore = JSON.parse(sessionStorage.getItem("cart"));
  const [cartItemCount, setCartItemCount] = useState(itemCountInStore || 0);
  const [cartItems, setCartItems] = useState(cartItemsInStore || []);

  const addItem = (product) => {
    const isInCart = cartItems.some((item) => item.id === product.id);
    if (!isInCart) {
      setCartItems((items) => {
        const newCart = [...items, product];
        sessionStorage.setItem("cart", JSON.stringify(newCart));
        sessionStorage.setItem(`${product.name}`, 1);
        return newCart;
      });
      setCartItemCount(cartItemCount + 1);
      sessionStorage.setItem("count", cartItemCount + 1);
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
      <Cart
        cartItemCount={cartItemCount}
        products={cartItems}
        onQtyChange={(qty) => setCartItemCount(qty)}
      />
      <div className="product-list">{productList}</div>
    </div>
  );
}
