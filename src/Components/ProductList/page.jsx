import "./ProductList.css";
import Product from "../Product/Product";

export default function ProductList({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
}
