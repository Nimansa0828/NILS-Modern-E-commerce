import React, { useContext } from 'react';
import './Category.css';
import { ShopContext } from '../../Context/ShopContext';
import Item from '../../Components/Item/Item'; 


export const Category = ({ banner, category }) => {
  

  const { all_product } = useContext(ShopContext);
if (!Array.isArray(all_product)) {
  return <p>Loading or invalid product data</p>;
}

  // Filter products based on category (case-insensitive)
  console.log("all_product is:", all_product);
console.log("Type of all_product:", typeof all_product);

const filteredProducts = all_product.filter(
  (product) =>
    product.category && // check exists
    product.category.toLowerCase() === category.toLowerCase()
);


  

  return (
    <div className="shop-category">
      <div className="category-banner-wrapper">
  <img src={banner} alt={`${category} banner`} className="category-banner" />
  <div className="banner-text">{category}</div>
</div>
      

        
      

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
    <p>No products found for {category}</p>
  )}
</div>
      <div className="category-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default Category;

