import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Nav() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleBurgerMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute w-full top-0 z-50 bg-gray-800 text-white"
      >
        
        <div className="flex justify-between items-center h-20 px-6 sm:px-10">
          
          <div className="text-emerald-400 text-3xl sm:text-4xl" style={{ fontFamily: "'Pacifico', cursive" }}>
            <Link to="/">EverGreen</Link>
          </div>

          
          <div className="hidden sm:flex gap-10">
            <Link to="/about">About us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/treatments">Treatments</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>

          
          <button onClick={toggleBurgerMenu} className="sm:hidden text-white text-3xl">
            ☰
          </button>

          
          <div
            onClick={() => navigate('/survey')}
            className="hidden sm:block px-4 py-2 rounded-2xl bg-emerald-400 cursor-pointer text-sm"
          >
            <p>Request free Survey</p>
          </div>
        </div>

        
        {menuOpen && (
          <motion.div className="flex flex-col items-center gap-4 py-4 sm:hidden border-t border-gray-700"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <Link to="/about" onClick={toggleBurgerMenu}>About us</Link>
            <Link to="/services" onClick={toggleBurgerMenu}>Our Services</Link>
            <Link to="/treatments" onClick={toggleBurgerMenu}>Treatments</Link>
            <Link to="/gallery" onClick={toggleBurgerMenu}>Gallery</Link>
            <Link to="/contact" onClick={toggleBurgerMenu}>Contact</Link>
            <div
              onClick={() => {
                navigate("/survey");
                toggleBurgerMenu();
              }}
              className="mt-2 px-4 py-2 rounded-2xl bg-emerald-400 cursor-pointer text-sm"
            >
              <p>Request free Survey</p>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
