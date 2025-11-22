import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const backendURL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${backendURL}/api/products/${id}`);
        if (!res.ok) {
          throw new Error("Product not found");
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, backendURL]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div className="error">No product found</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className="price">Rs. {product.price}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
