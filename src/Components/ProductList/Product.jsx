import "./ProductList.css";
import Product from "../Product/Product";
import Link from "next/link";

export default function ProductList({ products }) {
  return (
    <div className="container">
      <div className="product-grid">
        {products.map((product) => (
          <Link
            className="Link"
            href={`/products/${product.id}`}
            key={product.id}
          >
            <Product
              title={product.title}
              description={product.description}
              image={product.thumbnail}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
