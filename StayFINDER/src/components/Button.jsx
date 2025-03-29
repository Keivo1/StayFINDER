import React from 'react';

const Button = ({ variant = 'primary', children, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-semibold transition-colors duration-200';
  
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };

  const buttonStyle = `${baseStyles} ${variantStyles[variant]}`;

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;