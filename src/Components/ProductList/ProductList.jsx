"use client";
import { useTranslations } from "next-intl";
import "./ProductList.css";
import Product from "../Product/Product";
import UpdateProductForm from "../UpdateProductForm/UpdateProductForm";
import { useRouter } from "@/i18n/routing";
import SearchBar from "../SearchBar/SearchBar";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import { useState } from "react";
import Return from "../../../public/svg/ReturnSvg";
import UpdateSvg from "../../../public/svg/UpdateSvg";

export default function ProductList({ products, onSearch }) {
  const t = useTranslations("products");
  const router = useRouter();
  const [editingProduct, setEditingProduct] = useState(null);

  const handleSort = (event) => {
    const [sortBy, order] = event.target.value.split("-");
    router.push(`/products?sortBy=${sortBy}&order=${order}`);
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
    router.push(`/products/${productId}`);
  };
  return (
    <div className="container080">
      <div className="sort-container">
        <AddNewProduct />
        <div className="sort-controls">
          <select className="sort-select" onChange={handleSort}>
            <option value="title-asc">{t("title-asc")}</option>
            <option value="title-desc">{t("title-desc")}</option>
            <option value="price-asc">{t("price-asc")}</option>
            <option value="price-desc">{t("price-asc")}</option>
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
      </div>
    </div>
  );
}
