export default function Product({ product, name, onClick }) {
  return (
    <div className="product-card">
      <div className="product">{name}</div>
      <button className="btn-add-to-cart" onClick={() => onClick(product)}>
        Add to Cart
      </button>
    </div>
  );
}
