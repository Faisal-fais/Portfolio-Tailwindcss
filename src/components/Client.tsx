import Client1 from "../img/Clients/1.svg"
import Client2 from "../img/Clients/2.svg"
import Client3 from "../img/Clients/3.svg"
import Client4 from "../img/Clients/4.svg"

const Client = () => {
  return (
    <section id="clients" className="pt-36 dark:bg-slate-300 pb-32 w-full bg-slate-700">
        <div className="container mx-auto">
            <div className="w-full px4">
                <div className="mx-auto text-center mb-16">
                    <h4 className="font-semibold text-lg text-primary mb-2">Clients
                    </h4>
                    <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Yang Pernah Bekerjasama</h2>
                    <p className="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quia accusantium possimus beatae!</p>
                </div>
            </div>
            <div className="w-full px-4">
                <div className="flex flex-wrap items-center justify-center">
                    <a href="#">
                        <img src={Client1} alt="" width="120px" className="client-logo" />
                    </a>
                    <a href="#">
                        <img src={Client2} alt="" width="120px" className="client-logo" />
                    </a>
                    <a href="#">
                        <img src={Client3} alt="" width="120px" className="client-logo" />
                    </a>
                    <a href="#">
                        <img src={Client4} alt="" width="120px" className="client-logo" />
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Client