import { Link } from "react-router";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center mt-30">
      <p className="text-emerald-400 text-8xl" style={{fontFamily: "'Pacifico', cursive"}}>EverGreen</p>
      <p className="text-white font-bold mt-10">LAWN AND WEED SERVICES</p>
      <p className="text-white mt-5 max-w-200" >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        distinctio similique provident totam blanditiis, soluta a aperiam sint!
        Id odio libero eveniet magni! Magnam tempora fuga totam voluptatibus
        modi. Voluptas.
      </p>

      <div className="flex gap-5 font-sans font-medium">
        <div className="flex text-black bg-emerald-400 px-6 py-2 rounded-4xl cursor-pointer">
        <Link to='/services'>Services</Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        </div>
        <Link to='/contact' className="text-black bg-white px-6 py-2 rounded-4xl">Get in Touch</Link>
      </div>
    </div>
  );
}
