import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";

export default function Nav() {

    const navigate = useNavigate();

  return (
    <motion.div 
        initial={{ y: -100, opacity: 0}}
        animate={{ y: 0, opacity: 1 }}
        transition={{duration: 0.6, ease: "easeOut"}}
    className="absolute left-0 top-0 w-full bg-transparent flex flex-row justify-between mt-5 px-20 lg:h-15 items-center">
      <div
        className="text-emerald-400 text-4xl"
        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        <Link to="/">EverGreen</Link>
      </div>

      <div className="flex gap-10 text-white">
        <a href="#about">About us</a>
        <a href="#services">Our Services</a>
        <a href="#treatments">Treatments</a>
        <a href="#href">Gallery</a>
        <a href="#contact">Contact</a>
      </div>

      <div onClick={() => navigate('#survey')} className="px-6 py-2 rounded-4xl bg-emerald-400 cursor-pointer">
        <p>Request free Survey</p>
      </div>
    </motion.div>
  );
}
