import About from "./components/About"
import Blog from "./components/Blog"
import Client from "./components/Client"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"


export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Client />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}
