import Ecommerse from "../img/portfolio/2.jpg"
import LandingPage from "../img/portfolio/1.jpg"
import Technical from "../img/portfolio/3.jpg"
import TributePage from "../img/portfolio/4.jpg"
const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-36 pb-16 w-full dark:bg-slate-800 bg-slate-100">
        <div className="container mx-auto">
            <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                    <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>
                    <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Project Terbaru</h2>
                    <p className="font-medium text-shadow-md text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ex repellat eos id voluptatibus sequi.</p>
                </div>
            </div>
            <div className="w-full px-4 flex flex-wrap justify-center">
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded shadow-md overflow-hidden">
                        <img src={LandingPage} alt="landing page" width="600"/>
                    </div>
                    <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">Landing Page Faisal</h3>
                    <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorum error eveniet?</p>
                </div>
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded shadow-md overflow-hidden">
                        <img src={Ecommerse} alt="E-Commerce" width="600" />
                    </div>
                    <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">E-Commerce</h3>
                    <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorum error eveniet?</p>
                </div>
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded shadow-md overflow-hidden">
                        <img src={Technical} alt="Technical Documentation" width="600" />
                    </div>
                    <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">Technical Documentation</h3>
                    <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorum error eveniet?</p>
                </div>
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded shadow-md overflow-hidden">
                        <img src={TributePage} alt="Tribute Page" width="600"/>
                    </div>
                    <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">Tribute Page</h3>
                    <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorum error eveniet?</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio