import React, { useContext } from 'react';
import './Occasion.css';
import { ShopContext } from '../../Context/ShopContext';
import Item from '../../Components/Item/Item';


export const Occasion = ({ banner, Occasion}) => {
  

  const { all_product } = useContext(ShopContext);
if (!Array.isArray(all_product)) {
  return <p>Loading or invalid product data</p>;
}

  // Filter products based on Occasion (case-insensitive)
  console.log("all_product is:", all_product);
console.log("Type of all_product:", typeof all_product);

const filteredProducts = all_product.filter(
  (product) =>
    product.Occasion && // check exists
    product.Occasion.toLowerCase() === Occasion.toLowerCase()
);


  

  return (
    <div className="shop-occasion">
      <div className="occasion-banner-wrapper">
  <img src={banner} alt={`${Occasion} banner`} className="occasion-banner" />
  <div className="banner-text">{Occasion}</div>
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
    <p>No products found for {Occasion}</p>
  )}
</div>
      <div className="occasion-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default Occasion;

