import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";

export default function Nav() {

    const navigate = useNavigate();

  return (
    <motion.div 
        initial={{ y: -100, opacity: 0}}
        animate={{ y: 0, opacity: 1 }}
        transition={{duration: 0.6, ease: "easeOut"}}
    className="w-full z-50  flex flex-row bg-gray-800 justify-between mt-5 px-20 lg:h-15 items-center">
      <div
        className="text-emerald-400 text-4xl"
        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        <Link to="/">EverGreen</Link>
      </div>

      <div className="flex gap-10 text-white">
        <Link to="/about">About us</Link>
        <Link to="/services">Our Services</Link>
        <Link to="/treatments">Treatments</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div onClick={() => navigate('/survey')} className="px-6 py-2 rounded-4xl bg-emerald-400 cursor-pointer">
        <p>Request free Survey</p>
      </div>
    </motion.div>
  );
}
