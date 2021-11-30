export default function Product({ product, onClick }) {
  return (
    <div className="product-card">
      <div className="product">{product.name}</div>
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
