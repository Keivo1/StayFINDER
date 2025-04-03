import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Cardcomponent from '../components/Cardcomponent';

const SearchResultPage = () => {
  const location = useLocation();
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location.state && location.state.results) {
      setAccommodations(location.state.results);
      setLoading(false);
    } else {
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
    }
  }, [location]);

  return (
    <div className="relative w-full min-h-screen bg-blue-50 flex flex-col items-center py-12 px-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
        Available Stays
      </h2>

      {loading ? (
        <p className="text-lg sm:text-xl text-gray-500 text-center animate-pulse">
          Loading accommodations...
        </p>
      ) : accommodations.length > 0 ? (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-full px-4">
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
        ) : (
            
        <div className="flex flex-col items-center text-center mt-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700">
            No accommodations found
          </h3>
          <p className="text-gray-500 mt-2 max-w-md">
            Try adjusting your search filters or check back later for more listings.
          </p>
          <button
            onClick={() => window.history.back()}
            className="mt-6 px-6 py-3 bg-[#2A6BFF] text-white rounded-md hover:bg-[#1f5ae0] transition duration-300"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResultPage;
