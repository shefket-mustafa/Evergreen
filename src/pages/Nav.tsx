import { Link } from "react-router";

export default function Nav () {




    return <div className="w-full bg-transparent flex flex-row justify-between px-20 lg:h-15 items-center">
            <div className="text-emerald-400 text-4xl" style={{fontFamily: "'Pacifico', cursive"}} >
                <p >EverGreen</p>
            </div>

            <div className="flex gap-10 text-white">
                <Link to='/about'>About us</Link>
                <Link to='/services'>Our Services</Link>
                <Link to='/treatments'>Treatments</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
            </div>

            <div className="px-6 py-2 rounded-4xl bg-emerald-400">
                <p >Request free Survey</p>
            </div>
        </div>
    
}