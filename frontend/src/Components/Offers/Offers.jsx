import React, { useState } from 'react';
import './Offers.css';
import offers_image from '../Assets/offer-removebg-preview.png';

export const Offers = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>

        <button onClick={handleClick}>Check Now</button>

        {showMessage && (
          <p className="installment-message">
            💳 We accept Koko – Pay in 3 installments even with a debit card!
          </p>
        )}
      </div>

      <div className="Clearance-Sale">
        <img src={offers_image} alt="Offer banner" />
      </div>
    </div>
  );
};

export default Offers;
