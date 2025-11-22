// src/Pages/SearchResults.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import all_product from '../Components/Assets/data';
import './SearchResults.css';



const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q')?.toLowerCase();

  useEffect(() => {
    if (query) {
      const keywords = query.split(' '); // split into words like ["floral", "dress"]
  
      const filtered = all_product.filter(product => {
        const name = product.name.toLowerCase();
        const category = product.category?.toLowerCase() || '';
        const occasion = product.Occasion?.toLowerCase() || '';
        const featured = product.Featured?.toLowerCase() || '';
  
        // Match if any keyword is in name, category, occasion, or featured
        return keywords.some(kw =>
          name.includes(kw) ||
          category.includes(kw) ||
          occasion.includes(kw) ||
          featured.includes(kw)
        );
      });
  
      setResults(filtered);
    }
  }, [query]);


  return (
    <div className="search-results">
      <h2>Search Results for: "{query}"</h2>
      {results.length > 0 ? (
        <div className="results-grid">
          {results.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;
