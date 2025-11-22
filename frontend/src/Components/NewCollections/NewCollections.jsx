import React from 'react';
import './NewCollections.css';
import new_collections from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>Top Categories</h1>
      <hr />
      <div className="collections-slider">
        {new_collections.map((item, i) => (
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
    </div>
  );
};

export default NewCollections;
