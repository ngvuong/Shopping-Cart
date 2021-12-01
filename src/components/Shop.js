import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import Product from "./Product";
import cart1 from "../assets/cart1.webp";
import cart2 from "../assets/cart2.webp";
import cart3 from "../assets/cart3.jpg";
import cart4 from "../assets/cart4.jpg";
import cart5 from "../assets/cart5.jpg";
import cart6 from "../assets/cart6.webp";

const products = [
  { id: 1, name: "Seven Wheeler", src: cart1, price: 50 },
  { id: 2, name: "Baskets on Wheels", src: cart2, price: 35 },
  { id: 3, name: "Double Decker", src: cart3, price: 75 },
  { id: 4, name: "Shop Stroller", src: cart4, price: 99 },
  { id: 5, name: "Red Cart", src: cart5, price: 999 },
  { id: 6, name: "Mesh Monster", src: cart6, price: 95 },
];

export default function Shop() {
  const itemCountInStore = parseInt(sessionStorage.getItem("count"));
  const cartItemsInStore = JSON.parse(sessionStorage.getItem("cart")) || [];
  const [cartItemCount, setCartItemCount] = useState(itemCountInStore || 0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    window.onload = () => {
      const navBar = document.querySelector(".navbar");
      navBar.classList.add("shop-page");
    };
  }, []);

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
    return <Product key={product.id} product={product} onClick={addItem} />;
  });
  return (
    <main className="catalog">
      <Cart
        cartItemCount={cartItemCount}
        products={cartItems}
        onQtyChange={(qty) => setCartItemCount(qty)}
      />
      <div className="product-list">{productList}</div>
    </main>
  );
}
