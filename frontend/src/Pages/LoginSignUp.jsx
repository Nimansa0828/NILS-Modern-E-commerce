import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/LoginSignUp.css';

const LoginSignUp = () => {
  const [isNewCustomer, setIsNewCustomer] = useState(true); // true: Sign Up, false: Login

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">

        {/* Toggle Buttons */}
        <div className="form-toggle">
          <button
            className={isNewCustomer ? 'active' : ''}
            onClick={() => setIsNewCustomer(true)}
          >
            New Customer
          </button>
          <button
            className={!isNewCustomer ? 'active' : ''}
            onClick={() => setIsNewCustomer(false)}
          >
            Returning Customer
          </button>
        </div>

        {isNewCustomer ? (
          <>
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
            </div>
            <button>Continue</button>
            <div className="loginsignup-agree">
              <input type="checkbox" id="agreeTerms" />
              <label htmlFor="agreeTerms">
                By continuing, I agree to the terms of use & privacy policy.
              </label>
            </div>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <div className="loginsignup-fields">
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
            </div>
            <button>Login</button>
            <p className="forgot-password"><Link to="/forgot-password">Forgot Password?</Link></p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignUp;
