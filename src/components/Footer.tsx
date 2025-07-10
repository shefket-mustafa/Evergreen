import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Footer() {



    return <motion.div
    initial={{ y: 150, opacity: 0}}
    animate={{ y: 0, opacity: 1 }}
    transition={{duration: 1, ease: "easeOut"}}
    className="w-full mt-10 border-t-4 min-40 px-6 bg-gray-800 flex flex-col font-sans">

        <div className="flex justify-between text-white py-5">
        <div>
        <h1 className="font-bold">
            Policies</h1>
        <div className="flex flex-col">
            <Link to='/policies/privacy'>Privacy </Link>
            <Link to='/policies/cookies'>Cookies </Link>
            <Link to='/policies/return'>Return </Link>
        </div>
        </div>

        <div>
        <h1 className="font-bold">Contacts</h1>
        <div >
            <p ><strong>Email:</strong> shefket.must@gmail.com</p>
            <p><strong>Phone:</strong> +359 894229461</p>
            <a target="blank" href="https://github.com/shefket-mustafa"><strong>More projects:</strong> Github Profile</a>
        </div>
        </div>

        <div>
        <h1>Socials</h1>
        <div className="flex gap-3 py-2">
            <a target="blank" href="https://instagram.com"> <FaInstagram className="hover:text-pink-500 transition" /></a>
            <a target="blank" href="https://facebook.com"> <FaFacebook className="hover:text-blue-600 transition" /></a>
            <a target="blank" href="https://x.com"> <FaXTwitter className="hover:text-black transition" /></a>
        </div>
        </div>
        </div>

        <div className="flex items-center justify-center text-white border-t-1 h-12">
            <p>© 2025 Evergreen • Nurturing Digital Growth</p>
        </div>

    </motion.div>
}