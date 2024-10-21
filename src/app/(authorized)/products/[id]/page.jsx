import Image from "next/image";
import "./page.css";
import PageNotFound from "@/Components/PageNotFound/PageNotFound";

async function fetchProduct(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch product");
    }
    return await response.json();
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return null;
    }
    throw error;
  }
}

export default async function Page({ params }) {
  const products = await fetchProduct(params.id);

  if (!products) {
    return <PageNotFound />;
  }

  return (
    <div className="product-container">
      <div className="product-images">
        <Image
          src={products.images[0]}
          alt={products.title}
          width={100}
          height={100}
          className="product-imagee"
        />
      </div>

      <h1 className="product-titlee">{products.title}</h1>

      <div className="product-info">
        <div className="product-description">
          <h3>Description</h3>
          <p>{products.description}</p>
        </div>

        <div className="product-meta">
          <div className="product-details">
            <strong>Price:</strong> ${products.price}
          </div>
          <div className="product-details">
            <strong>Category:</strong> {products.category}
          </div>
          <div className="product-details">
            <strong>Brand:</strong> {products.brand}
          </div>
          <div className="product-details">
            <strong>Availability:</strong> {products.availabilityStatus}
          </div>
        </div>

        <div className="product-warranty">
          <strong>Warranty:</strong> {products.warrantyInformation}
        </div>
        <div className="product-shipping">
          <strong>Shipping:</strong> {products.shippingInformation}
        </div>
      </div>

      <div className="product-reviews">
        <h3>Customer Reviews</h3>
        <ul>
          {products.reviews.map((review, index) => (
            <li key={index}>
              <p>
                <strong>{review.reviewerName}:</strong> {review.comment}
              </p>
              <p>Rating: {review.rating} / 5</p>
              <p>Date: {new Date(review.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
