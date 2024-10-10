import React, { useState, useEffect } from 'react';

 const card = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
        fetchProducts()

  }, []);


  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error fetching products: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-900 truncate">{product.title}</h3>
          <p className="text-green-600 font-medium text-lg mt-2">${product.price}</p>
          <p className="text-sm text-gray-500 mt-2 line-clamp-3">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default card;















