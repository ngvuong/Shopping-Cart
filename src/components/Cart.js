import React, { useEffect, useRef, useState } from "react";
import cartIcon from "../assets/cart-icon.svg";

export default function Cart({ cartItemCount, products, onQtyChange }) {
  const cartRef = useRef();
  const overlayRef = useRef();
  const quantityRef = useRef({});
  const [itemCount, setItemCount] = useState(cartItemCount);

  useEffect(() => {
    setItemCount(cartItemCount);
  }, [cartItemCount]);
  // Cart items from storage or props
  const items = JSON.parse(sessionStorage.getItem("cart")) || products;

  const cartItems = items.map((product, i) => {
    // Individual product quantity
    const productCount = parseInt(sessionStorage.getItem(`${product.name}`));
    // Input, decrement, and increment for adjusting quantities
    return (
      <div className="cart-item" key={product.id}>
        {product.name}
        <img src={product.src} alt={product.name} />
        <div className="quantity-field">
          <button
            onClick={(e) => {
              if (quantityRef.current[i].value > 0) {
                onQtyChange(itemCount - 1);
                sessionStorage.setItem("count", itemCount - 1);
                sessionStorage.setItem(`${product.name}`, productCount - 1);
              }
              // Remove and update cart if quantity 0
              if (productCount - 1 === 0) {
                sessionStorage.removeItem(`${product.name}`);
                const newCart = items.filter(
                  (item) => item.name !== product.name
                );
                sessionStorage.setItem("cart", JSON.stringify(newCart));
              }
              quantityRef.current[i].stepDown();
            }}
          >
            &minus;
          </button>

          <input
            type="number"
            min="0"
            defaultValue={sessionStorage.getItem(`${product.name}`) || 1}
            ref={(el) => (quantityRef.current[i] = el)}
            onChange={() => {
              sessionStorage.setItem(
                `${product.name}`,
                quantityRef.current[i].value
              );
              if (parseInt(quantityRef.current[i].value) === 0) {
                sessionStorage.removeItem(`${product.name}`);
                const newCart = items.filter(
                  (item) => item.name !== product.name
                );
                sessionStorage.setItem("cart", JSON.stringify(newCart));
              }
              const totalQty = Object.keys(quantityRef.current).reduce(
                (acc, key) => {
                  if (quantityRef.current[key]) {
                    return acc + parseInt(quantityRef.current[key].value);
                  }
                  return acc;
                },
                0
              );
              sessionStorage.setItem("count", parseInt(totalQty));
              onQtyChange(totalQty);
            }}
          />

          <button
            onClick={(e) => {
              quantityRef.current[i].stepUp();
              onQtyChange(itemCount + 1);
              sessionStorage.setItem("count", itemCount + 1);
              sessionStorage.setItem(`${product.name}`, productCount + 1);
            }}
          >
            &#43;
          </button>
        </div>
      </div>
    );
  });

  const closeCart = () => {
    overlayRef.current.classList.remove("active");
    cartRef.current.classList.remove("open");
  };

  return (
    <div className="cart-container">
      <div className="overlay" ref={overlayRef} onClick={closeCart}></div>
      <div
        className="cart-icon"
        onClick={() => {
          overlayRef.current.classList.add("active");
          cartRef.current.classList.add("open");
        }}
      >
        {itemCount ? <span>{parseInt(itemCount)}</span> : ""}
        <img src={cartIcon} alt="Shopping cart icon" />
      </div>
      <div className="cart" ref={cartRef}>
        <span className="btn-close-cart" onClick={closeCart}>
          &#10006;
        </span>
        <h2 className="cart-heading">{`Your Cart ${
          !itemCount ? "is empty" : ""
        }`}</h2>
        <div className="cart-items">{cartItems}</div>
        <div className="checkout">
          <div className="total">
            {itemCount
              ? `Total:
            $${
              items.reduce((acc, item, i) => {
                if (quantityRef.current[i]) {
                  const subTotal = quantityRef.current[i].value * item.price;
                  sessionStorage.setItem("total", acc + subTotal);
                  return acc + subTotal;
                }
                return acc;
              }, 0) || parseInt(sessionStorage.getItem("total"))
            }`
              : ""}
          </div>
          {itemCount ? (
            <button className="btn-check-out">Check Out</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
