import React, { useRef } from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

export const Popular = () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 300;
  };

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  return (
    <div className='Popular'>
      <h1>Trending Now</h1>
      <hr />
      <div className="popular-item-wrapper">
        <div className="popular-item" ref={scrollRef}>
          {data_product.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
        <button className="arrow-button arrow-left" onClick={scrollLeft}>&#8249;</button>
        <button className="arrow-button arrow-right" onClick={scrollRight}>&#8250;</button>
      </div>
    </div>
  );
};

export default Popular;
