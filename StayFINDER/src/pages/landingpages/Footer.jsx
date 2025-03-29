const Footer = () => {
  return (
    <footer className="bg-white py-4 mt-10">
      <div className="footercontainer mx-auto px-4 text-sm text-[#2A6BFF]">
        <div className="footertext flex justify-between items-center">
          <span className="font-semibold">StayFINDER</span>
          <p>
            &copy; {new Date().getFullYear()} stayfinder.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;