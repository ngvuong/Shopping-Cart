import React, { useEffect, useRef, useState } from "react";

export default function Cart({ cartItemCount, products, onQtyChange }) {
  const cartRef = useRef();
  const overlayRef = useRef();
  const quantityRef = useRef({});
  const [itemCount, setItemCount] = useState(cartItemCount);
  useEffect(() => {
    setItemCount(cartItemCount);
  }, [cartItemCount]);

  const cartItems = products.map((product, i) => {
    return (
      <div key={product.id}>
        {product.name}
        <div className="quantity-field">
          <button
            onClick={(e) => {
              if (quantityRef.current[i].value > 0) {
                setItemCount(itemCount - 1);
                onQtyChange(itemCount - 1);
              }
              quantityRef.current[i].stepDown();
            }}
          >
            &minus;
          </button>
          <input
            type="number"
            min="0"
            defaultValue="1"
            ref={(el) => (quantityRef.current[i] = el)}
          />
          <button
            onClick={(e) => {
              setItemCount(itemCount + 1);
              quantityRef.current[i].stepUp();
              onQtyChange(itemCount + 1);
            }}
          >
            &#43;
          </button>
        </div>
      </div>
    );
  });
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
        Cart {itemCount}
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
          !itemCount ? "is empty" : ""
        }`}</h2>
        <div className="cart-items">{cartItems}</div>
      </div>
    </div>
  );
}
