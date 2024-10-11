import "./ProductList.css";
import Product from "../Product/Product";
import Link from "next/link";

async function getProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function ProductList() {
  const products = await getProducts();
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
