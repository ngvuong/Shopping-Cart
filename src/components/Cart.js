import React, { useEffect, useRef, useState } from "react";

export default function Cart({ itemCount, products }) {
  const cartRef = useRef();
  const overlayRef = useRef();
  const [cartItemCount, setCartItemCount] = useState(itemCount);
  useEffect(() => {
    setCartItemCount(itemCount);
  }, [itemCount]);

  console.log(cartItemCount);
  const cartItems = products.map((product) => (
    <div key={product.id}>{product.name}</div>
  ));
  return (
    <div>
      <div className="overlay" ref={overlayRef}></div>
      <div
        className="cart-icon"
        onClick={() => {
          overlayRef.current.classList.add("active");
          cartRef.current.classList.add("open");
        }}
      >
        Cart {cartItemCount}
      </div>
      <div className="cart" ref={cartRef}>
        <span
          className="btn-close-cart"
          onClick={() => {
            overlayRef.current.classList.remove("active");
            cartRef.current.classList.remove("open");
          }}
        >
          &#10006;
        </span>
        <h2 className="cart-heading">{`Your Cart ${
          !cartItemCount ? "is empty" : ""
        }`}</h2>
        <div className="cart-items">{cartItems}</div>
      </div>
    </div>
  );
}
