
import Hero from "./Hero";

import Services from "./Services";

export default function Home(){


    return <div className="w-full" >


        <section id="hero">
            <Hero />     
        </section>

        <section id="services">
            <Services />
        </section>
    </div>
}