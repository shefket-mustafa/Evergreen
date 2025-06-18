
import Hero from "./Hero";
import Nav from "./Nav";
import Services from "./Services";

export default function Home(){


    return <div className="w-full bg-cover h-screen overflow-y-auto" style={{backgroundImage: "url('/images/background-hero.png')"}}>
    <Nav />
    <Hero />
    <Services />
    </div>
}