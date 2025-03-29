import React from 'react';
import Button from './Button';

const Cardcomponent = ({ image, name, address, price, time, rating, reviews }) => {
  return (
    <div className="w-[920px] h-[760px] p-8 bg-neutral-200 rounded-lg inline-flex flex-col justify-start items-center gap-8">
      <div className="self-stretch h-[500px] relative rounded-xl overflow-hidden">
        <img
          className="w-[856px] h-[500px] absolute object-cover"
          src={image || 'https://placehold.co/856x500'}
          alt={name}
        />
      </div>

      <div className="self-stretch p-4 bg-white flex flex-col justify-start items-start gap-6 rounded-md">
        <div className="self-stretch flex justify-between items-center">
          
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="text-neutral-900 text-2xl font-semibold font-poppins">{name}</div>
            <div className="text-neutral-900 text-sm font-normal font-roboto">{address}</div>
          </div>

          <div className="flex flex-col justify-end items-end gap-2">
            
            <div className="flex items-center gap-1">
              <div className="text-black text-lg font-bold font-poppins">₦{Number(price).toLocaleString()}</div>
              <div className="text-neutral-900 text-sm font-medium font-poppins">/</div>
              <div className="text-neutral-900 text-sm font-medium font-poppins">{time}</div>
            </div>

            <div className="flex items-center gap-1">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M12.43 8.5L10 0.5L7.57 8.5H0L6.18 12.91L3.83 20.5L10 15.81L16.18 20.5L13.83 12.91L20 8.5H12.43Z" fill="#FFC107" />
              </svg>
              <div className="text-sm font-bold text-neutral-900 font-roboto">{rating}</div>
              <div className="text-xs font-medium text-neutral-900 font-inter">({reviews} reviews)</div>
            </div>
          </div>
        </div>

        <div className="self-stretch h-12">
          <Button variant="primary">View Deal</Button>
        </div>
      </div>
    </div>
  );
};

export default Cardcomponent;
