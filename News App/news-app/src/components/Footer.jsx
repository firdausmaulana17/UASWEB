
const Footer = () => {
  const currentYear = new Date().getFullYear(); // tahun sekarang
  return (
    <div>
    <footer className="bg-dark text-white text-center py-3 mt-4">
      
        &copy; {currentYear} My News App. All rights reserved.
     </footer>
      
        Designed with ❤️ using React & Bootstrap
      </div>
   
  );
};

export default Footer;