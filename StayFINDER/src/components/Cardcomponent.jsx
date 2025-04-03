import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const CardComponent = ({ image, name, address, price, time, rating, reviews }) => {
  return (
    <div className="flex flex-wrap justify-center p-4">
      <div className="flex flex-col gap-6 p-4 rounded-lg bg-neutral-200 shadow-md hover:shadow-lg transition-all w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">

        <div className="w-full aspect-[16/9] rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={image || "https://placehold.co/856x500"}
            alt={name}
          />
        </div>

        <div className="w-full p-4 bg-white flex flex-col gap-4 rounded-md">
          <div className="flex justify-between items-start">

            <div className="flex flex-col gap-1">
              <h3 className="text-neutral-900 text-lg md:text-xl font-semibold">{name}</h3>
              <p className="text-neutral-600 text-sm md:text-base">{address}</p>
            </div>

            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-1">
                <span className="text-black text-lg font-bold">
                  ₦{Number(price).toLocaleString()}
                </span>
                <span className="text-neutral-600 text-sm">/ {time}</span>
              </div>

              <div className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 20 21" fill="none">
                  <path
                    d="M12.43 8.5L10 0.5L7.57 8.5H0L6.18 12.91L3.83 20.5L10 15.81L16.18 20.5L13.83 12.91L20 8.5H12.43Z"
                    fill="#FFC107"
                  />
                </svg>
                <span className="text-sm font-bold text-neutral-900">{rating}</span>
                <span className="text-xs text-neutral-600">({reviews} reviews)</span>
              </div>
            </div>
          </div>

          <Button variant="primary">View Deal</Button>
        </div>
      </div>
    </div>
  );
};

// PropTypes
CardComponent.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  time: PropTypes.string.isRequired,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  reviews: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CardComponent;
