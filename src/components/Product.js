export default function Product({ product, onClick }) {
  return (
    <div className="product-card">
      <h2 className="product">{product.name}</h2>
      <div className="image">
        <img src={product.src} alt="" />
      </div>
      <div className="price">${product.price}</div>
      <button className="btn-add-to-cart" onClick={() => onClick(product)}>
        Add to Cart
      </button>
    </div>
  );
}
