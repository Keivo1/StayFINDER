import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const statesInNigeria = [
  "Abia", "Abuja", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa",
  "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger",
  "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

const SearchFilterBar = () => {
  const [selectedState, setSelectedState] = useState('');
  const [stayType, setStayType] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log('fetch')

    if (!selectedState) {
      alert('Please fill in both fields');
      return;
    }

    try {
      const response = await fetch(
        `https://api.makcorps.com/mapping?api_key=67eeff2b74d5e6f67ee80370&name=${selectedState}`
      );
      const data = await response.json();
      navigate('/search-results', { state: { results: data } });
    } catch (err) {
      console.error('Search failed:', err);
    }
  };

  return (
    <div className="bg-white/80 p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        
        <div className="flex flex-col md:flex-row gap-4">

          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-[#5B8EFF]"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select a state</option>
            {statesInNigeria.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>

          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-[#5B8EFF]"
            placeholder="e.g. hotel, apartment, lodge"
            value={stayType}
            onChange={(e) => setStayType(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-[#2A6BFF] text-white rounded-md hover:bg-[#1f5ae0] transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchFilterBar;
