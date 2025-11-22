import React, { useContext } from 'react';
import './Featured.css';
import { ShopContext } from '../../Context/ShopContext';
import Item from '../../Components/Item/Item'; 

export const Featured = ({ banner, Featured }) => {
  

  const { all_product } = useContext(ShopContext);
if (!Array.isArray(all_product)) {
  return <p>Loading or invalid product data</p>;
}

  // Filter products based on category (case-insensitive)
  console.log("all_product is:", all_product);
console.log("Type of all_product:", typeof all_product);

const filteredProducts = all_product.filter(
  (product) =>
    product.Featured && // check exists
    product.Featured.toLowerCase() === Featured.toLowerCase()
);


  

  return (
    <div className="Featured">
      <div className="Featured-banner-wrapper">
      <img src={banner} alt={`${Featured} banner`} className="Featured-banner" />
      <div className="Featured-text">{Featured}</div>
      </div>
      <h2>{Featured}</h2>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Item
        key={product.id}
        id={product.id}
        name={product.name}
        image={product.image}
        new_price={product.new_price}
        old_price={product.old_price}
      />
    ))
  ) : (
    <p>No products found for {Featured}</p>
  )}
</div>
      <div className="featured-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default Featured;

