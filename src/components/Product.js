export default function Product(props) {
  return (
    <div className="product-card">
      <div className="product">{props.name}</div>
      <button className="btn-add-to-cart">Add to Cart</button>
    </div>
  );
}
