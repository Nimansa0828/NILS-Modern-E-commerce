import React, { useRef, useEffect, useState } from "react";
import { Button } from '../../UI/Button';
import { Card, CardContent } from '../../UI/Card';
import { Link } from 'react-router-dom';
import './AllProduct.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AllProduct = () => {
  const scrollRef = useRef(null);
  const [products, setProducts] = useState([]);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  return (
    <div className="all-product-wrapper">
      <h2 className="all-product-heading">ALL WOMEN'S PRODUCTS</h2>
      <div className="scroll-buttons">
        <button className="scroll-btn" onClick={() => scroll('left')}>
          <ChevronLeft size={24} />
        </button>
        <button className="scroll-btn" onClick={() => scroll('right')}>
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="all-product-container" ref={scrollRef}>
        {products.map((product) => (
          <Card key={product._id} className="all-product-card">
            <Link to={`/Product/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />
            </Link>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-pink-600 font-bold mt-1">
                Rs. {product.price || product.new_price}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
