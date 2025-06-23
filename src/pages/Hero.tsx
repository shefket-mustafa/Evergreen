
import { Link } from "react-router";
import SatisfiedCustomers from "../components/SatisfiedCustomers";
import { motion } from "framer-motion"
import ServicesHero from "./ServicesHero";

export default function Hero() {
  return (
<>
    <div 
        className="flex flex-col justify-center items-center bg-cover min-h-screen px-4 pt-30" 
        style={{backgroundImage: "url('/images/background-hero.png')"}}>
        

        <motion.div
        initial={{y:100, opacity: 0}}
        animate={{y:0, opacity: 1}}
        transition={{duration: 0.6, ease: 'easeOut'}}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col justify-center items-center">
      <p className="text-emerald-400 text-8xl" style={{fontFamily: "'Pacifico', cursive"}}>EverGreen</p>
      <p className="text-white font-bold mt-10">LAWN AND WEED SERVICES</p>
      <p className="text-white mt-5 max-w-200" >
        In EverGreen, we specialize in expert lawn care and targeted weed control to
        keep your property lush, civrant and weed-free season after season.
        Our eco-friendly treatments and reliable service ensure a healthy, green lawn you’ll love coming home to.
      </p>

      <div className="flex gap-5 font-sans font-medium mt-5">
        <div className="flex text-black bg-emerald-400 px-6 py-2  rounded-4xl cursor-pointer">
        <Link to='/services'>Services</Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        </div>
        <Link to='/contact' className="text-black bg-white px-6 py-2 rounded-4xl">Get in Touch</Link>
      </div>
      <SatisfiedCustomers />
      </motion.div>

    </div>

    <ServicesHero />
    </>
  );
}
