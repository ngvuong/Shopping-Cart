import React, { useRef } from "react";

export default function Cart() {
  const cartRef = useRef();

  return (
    <div>
      <div className="overlay"></div>
      <div
        className="cart-icon"
        onClick={() => cartRef.current.classList.add("open")}
      >
        Cart
      </div>
      <div className="cart" ref={cartRef}>
        <span
          className="btn-close-cart"
          onClick={() => cartRef.current.classList.remove("open")}
        >
          &#10006;
        </span>
      </div>
    </div>
  );
}
