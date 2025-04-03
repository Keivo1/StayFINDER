const Footer = () => {
  const handleClick = (event) => {
    event.preventDefault();
    alert("Option is coming soon");
  };

  return (
    <footer className="bg-white py-6 shadow-inner w-full px-6">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#2A6BFF] space-y-3 md:space-y-0">
        <span className="font-semibold">StayFINDER</span>

        <div className="flex space-x-6">
          <a 
            href="#" 
            onClick={handleClick} 
            className="hover:text-blue-600 active:text-blue-800 cursor-pointer transition"
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            onClick={handleClick} 
            className="hover:text-blue-600 active:text-blue-800 cursor-pointer transition"
          >
            Terms of Service
          </a>
          <a 
            href="#" 
            onClick={handleClick} 
            className="hover:text-blue-600 active:text-blue-800 cursor-pointer transition"
          >
            Contact Us
          </a>
        </div>

        <p className="text-center md:text-right">
          &copy; {new Date().getFullYear()} stayfinder.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
