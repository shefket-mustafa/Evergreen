
import ScrollOnTop from "./helpers/ScrollOnTop"
import Home from "./pages/Home"
import Services from "./pages/Services"


function App() {

  

  return (
   <>
   <ScrollOnTop />
   <section id="/">
  <Home />
   </section>
  <section id="services">
  <Services />
  </section>
  
   </>
  )
}

export default App
