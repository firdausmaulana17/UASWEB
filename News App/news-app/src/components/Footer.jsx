const Footer = () => {
  const currentYear = new Date().getFullYear();//tahun sekarang
  return (
<div>
  <footer className= "bg-dark text-with text-center py-3 mt-4">
    &copy; {currentYear} My News App. All rights reseverved.  </footer>

    Designed With using React & Bootstrap
    Design By Firdaus Maulana 
</div>
  );
};

export default Footer;