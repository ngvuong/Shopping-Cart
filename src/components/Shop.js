import React, { useState } from "react";
import Cart from "./Cart";
import Product from "./Product";
import cart1 from "../assets/cart1.webp";
import cart2 from "../assets/cart2.webp";
import cart3 from "../assets/cart3.jpg";
import cart4 from "../assets/cart4.jpg";
import cart5 from "../assets/cart5.jpg";
import cart6 from "../assets/cart6.webp";

const products = [
  { id: 1, name: "Tiny 7 Wheeler", src: cart1 },
  { id: 2, name: "Product2", src: cart2 },
  { id: 3, name: "Product3", src: cart3 },
  { id: 4, name: "Product4", src: cart4 },
  { id: 5, name: "Product5", src: cart5 },
  { id: 6, name: "Product6", src: cart6 },
];

export default function Shop() {
  const itemCountInStore = parseInt(sessionStorage.getItem("count"));
  const cartItemsInStore = JSON.parse(sessionStorage.getItem("cart")) || [];
  const [cartItemCount, setCartItemCount] = useState(itemCountInStore || 0);
  const [cartItems, setCartItems] = useState([]);

  const addItem = (product) => {
    setCartItems(cartItemsInStore);
    const isInCart = cartItemsInStore.some((item) => item.id === product.id);
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
    <main className="catalog">
      Shop
      <Cart
        cartItemCount={cartItemCount}
        products={cartItems}
        onQtyChange={(qty) => setCartItemCount(qty)}
      />
      <div className="product-list">{productList}</div>
    </main>
  );
}
