import AboutUs from "./components/AboutUs"
import Contacts from "./components/Contacts"
import Delivery from "./components/Delivery"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NavbarBottom from "./components/NavbarBottom"
import NavbarTop from "./components/NavbarTop"
import Order from "./components/Order"
import SulfurGranular from "./components/SulfurGranular"
import SulfurLump from "./components/SulfurLump"
import SulfurNews from "./components/SulfurNews"
import SulfurUrea from "./components/SulfurUrea"
import SulfurVideo from "./components/SulfurVIdeo"

const App = () => {
  return (
    <div>
     <NavbarTop/>
     <NavbarBottom/>
     <Header/>
     <SulfurGranular/>
     <SulfurLump/>
     <SulfurUrea/>
     <AboutUs/>
     <SulfurNews/>
     <SulfurVideo/>
     <Delivery/>
     <Order/>
     <Contacts/>
     <Footer/>
    </div>
  )
}

export default App