import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";


export default function Footer() {



    return <div className="w-full mt-10 border-t-4 h-40 px-15 flex flex-col font-sans">

        <div className="flex justify-between py-5">
        <div>
        <h1 className="font-bold">
            Policies</h1>
        <div>
            <p>Privacy </p>
            <p>Cookie </p>
            <p>Return </p>
        </div>
        </div>

        <div>
        <h1 className="font-bold">Contacts</h1>
        <div >
            <p ><strong>Email:</strong> shefket.must@gmail.com</p>
            <p><strong>Phone:</strong> +359 894229461</p>
            <a href="https://github.com/shefket-mustafa"><strong>More projects:</strong> Github Profile</a>
        </div>
        </div>

        <div>
        <h1>Socials</h1>
        <div className="flex gap-3 py-2">
            <a href="https://instagram.com"> <FaInstagram className="hover:text-pink-500 transition" /></a>
            <a href="https://facebook.com"> <FaFacebook className="hover:text-blue-600 transition" /></a>
            <a href="https://x.com"> <FaXTwitter className="hover:text-black transition" /></a>
        </div>
        </div>
        </div>

        <div className="flex items-center justify-center border-t-1 h-12">
            <p>© 2025 Evergreen • Nurturing Digital Growth</p>
        </div>

    </div>
}