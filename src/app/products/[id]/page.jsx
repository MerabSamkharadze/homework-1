"use client";

import { useEffect, useState } from "react";
import Loader from "@/Components/Loader/Loader";
import axios from "axios";
import "./page.css";
import PageNotFound from "@/Components/PageNotFound/PageNotFound";

async function fetchProducts(id) {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return null;
    }
    throw error;
  }
}

export default function Page({ params }) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      const data = await fetchProducts(params.id);
      setProducts(data);
      setLoading(false);
    }
    loadProduct();
  }, [params.id]);

  if (loading) {
    return <Loader />;
  }

  if (!products) {
    return <PageNotFound />;
  }

  return (
    <div className="product-container">
      <div className="product-images">
        {products.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={products.title}
            className="product-imagee"
          />
        ))}
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
