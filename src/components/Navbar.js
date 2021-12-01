import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navRef = useRef();

  return (
    <nav className="navbar" ref={navRef}>
      <h1 className="title">The Shopping Cart Shop</h1>
      <ul className="nav-links">
        <Link to="/">
          <li onClick={() => navRef.current.classList.remove("shop-page")}>
            Home
          </li>
        </Link>
        <Link to="/shop">
          <li onClick={() => navRef.current.classList.add("shop-page")}>
            Shop
          </li>
        </Link>
      </ul>
    </nav>
  );
}
