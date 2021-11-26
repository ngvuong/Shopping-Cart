import React, { useRef } from "react";

export default function Cart() {
  const cartRef = useRef();
  const overlayRef = useRef();

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
        Cart
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
      </div>
    </div>
  );
}
