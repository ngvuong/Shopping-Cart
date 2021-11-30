export default function Product({ product, name, onClick }) {
  return (
    <div className="product-card">
      <div className="product">{name}</div>
      <div className="image">
        <img src={product.src} alt="" />
      </div>
      <button className="btn-add-to-cart" onClick={() => onClick(product)}>
        Add to Cart
      </button>
    </div>
  );
}
