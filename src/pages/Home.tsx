
import Hero from "./Hero";
import Nav from "./Nav";

export default function Home(){


    return <div className="w-full bg-cover h-screen" style={{backgroundImage: "url('/public/images/background-hero.png')"}}>
    <Nav />
    <Hero />
    </div>
}