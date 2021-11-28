import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home-page">
      <h2 className="page-heading">
        Shop here for all your shopping cart needs
      </h2>
      <p>
        Select from your favorite brands or try out something different from our
        collection.
      </p>
      <Link to="/shop">
        <button className="btn-shop">Shop Now</button>
      </Link>
    </main>
  );
}
