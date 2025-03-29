import React, { useEffect, useState } from 'react';
import Cardcomponent from '../components/Cardcomponent';

const SearchResultPage = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with actual API endpoint
    fetch('https://api.example.com/accommodations')
      .then((res) => res.json())
      .then((data) => {
        setAccommodations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="px-6 py-10 bg-gray-50 min-h-screen">
     
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Available Stays</h2>

      {loading ? (
        <p className="text-center text-gray-500 text-lg">Loading accommodations...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((item, index) => (
            <Cardcomponent
              key={index}
              image={item.image}
              name={item.name}
              address={item.address}
              price={item.price}
              time={item.time}
              rating={item.rating}
              reviews={item.reviews}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultPage;
