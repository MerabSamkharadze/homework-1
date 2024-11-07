"use client";

import "./ProductList.css";
import Product from "../Product/Product";
import UpdateProductForm from "../UpdateProductForm/UpdateProductForm";
import { useRouter, usePathname } from "next/navigation";
import SearchBar from "../SearchBar/SearchBar";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import { useEffect, useState } from "react";
import Return from "../../../public/svg/ReturnSvg";
import UpdateSvg from "../../../public/svg/UpdateSvg";

export default function ProductList({ products, onSearch }) {
  const router = useRouter();
  const [localProducts, setLocalProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setLocalProducts(savedProducts);
  }, []);

  const handleSort = (event) => {
    const [sortBy, order] = event.target.value.split("-");
    router.push(`/products?sortBy=${sortBy}&order=${order}`);
  };

  const handleAddProduct = (newProduct) => {
    setLocalProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the product.");
      }
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  const handleUpdateProduct = async (updatedProduct) => {
    console.log(updatedProduct);

    try {
      const response = await fetch(
        `https://dummyjson.com/products/${updatedProduct.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ updatedProduct }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update the product.");
      }

      const data = await response.json();
      setLocalProducts((prevProducts) =>
        prevProducts.map((product) => (product.id === data.id ? data : product))
      );

      localStorage.setItem("products", JSON.stringify(localProducts));
    } catch (error) {
      console.error("Error updating product:", error.message);
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const handleFormSubmit = (updatedProduct) => {
    handleUpdateProduct(updatedProduct);
    setEditingProduct(null);
  };
  const handleProductClick = (productId) => {
    router.push(`/en/products/${productId}`);
  };
  return (
    <div className="container080">
      <div className="sort-container">
        <AddNewProduct onAddProduct={handleAddProduct} />
        <div className="sort-controls">
          <select className="sort-select" onChange={handleSort}>
            <option value="title-asc">Sort by Title (Asc)</option>
            <option value="title-desc">Sort by Title (Desc)</option>
            <option value="price-asc">Sort by Price (Asc)</option>
            <option value="price-desc">Sort by Price (Desc)</option>
          </select>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div
            className="productLink"
            onClick={() => handleProductClick(product.id)}
            key={product.id}
          >
            <Product
              title={product.title}
              description={product.description}
              image={product.thumbnail}
              price={product.price}
            />
            <button
              className="edit-button"
              onClick={(e) => {
                e.stopPropagation();
                handleEditClick(product);
              }}
            >
              <UpdateSvg />
            </button>
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteProduct(product.id);
              }}
            >
              <Return />
            </button>
          </div>
        ))}

        {editingProduct && (
          <UpdateProductForm
            product={editingProduct}
            onSubmit={handleFormSubmit}
          />
        )}

        {localProducts.length > 0 &&
          localProducts.map((product) => (
            <div
              className="productLink"
              onClick={() => router.push(`/products/${product.id}`)}
              key={product.id}
            >
              <Product
                title={product.title}
                description={product.description}
                price={product.price}
                image={"/assets/productImg.png"}
              />
              <button
                className="edit-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEditClick(product);
                }}
              >
                <UpdateSvg />
              </button>
              <button
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  const updatedProducts = localProducts.filter(
                    (p) => product.id !== p.id
                  );
                  setLocalProducts(updatedProducts);

                  localStorage.setItem(
                    "products",
                    JSON.stringify(updatedProducts)
                  );
                }}
              >
                <Return />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
