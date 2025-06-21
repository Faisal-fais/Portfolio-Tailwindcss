import { useEffect, useState } from "react"
import Heroimg from "../img/IMG-20240106-WA0009.png"

const Hero = () => {
    const [invisible, setInvisible] = useState(false);

    useEffect(() => {
        const toggle = () => {
            if(window.scrollY > 100) {
                setInvisible(true)
            } else {
                setInvisible(false)
            }
        }

        window.addEventListener('scroll', toggle);
        return() => {
            window.removeEventListener('scroll', toggle)
        }
    })

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
        <section id="home" className="dark:bg-dark w-full">
        <div className=" container px-4 mx-auto">
            <div className="flex flex-wrap px-4">
                <div className="w-full self-center px-4 lg:w-1/2 lg">
                    <h1 className="text-base font-semibold text-primary md:text-xl ">Hallo Semua 👋, saya <span className="block font-bold text-dark text-4xl lg:text-5xl dark:text-white">Faisal</span></h1>
                    <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">Student | <span className="text-dark dark:text-white">Web Developer</span></h2>
                    <p className="font-medium text-secondary mb-10 leading-relaxed">Belajar web programming itu mudah dan menyenangkan bukan? <span className="text-dark font-semibold dark:text-white">bukan!</span></p>

                    <a href="#" className="text-base font-semibold bg-primary text-white py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out">Hubungi Saya</a>
                </div>
                <div className="w-full self-end px-2 lg:w-1/2">
                    <div className="relative mt-10 lg:mt-9 lg:right-0 overflow-hidden">
                        <span className="absolute -bottom-20 mx-auto left-1/2 -translate-x-1/2 -rotate-45">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-lg h-lg">
                                <path fill="oklch(60% 0.118 184.704)" d="M35.2,-60C39.8,-45.1,33.6,-27,39.7,-12C45.7,2.9,63.9,14.8,62.1,20.1C60.3,25.4,38.5,24.2,24.8,24.6C11.1,25.1,5.5,27.3,-1.8,29.8C-9.2,32.3,-18.4,35.2,-24.9,32.4C-31.5,29.6,-35.4,21.2,-39.7,11.9C-44.1,2.7,-48.9,-7.4,-45.6,-13.9C-42.3,-20.5,-30.8,-23.5,-21.8,-37C-12.8,-50.5,-6.4,-74.5,4.4,-80.6C15.3,-86.7,30.6,-74.9,35.2,-60Z" transform="translate(100 100)" />
                              </svg>
                        </span>
                        <img src={Heroimg} alt="" className="relative w-[300px] mx-auto z-10"/>
                    </div>
                </div>
            </div>
        </div>
        <a href="#" onClick={scrollToTop} id="toTop" className={`h-12 w-12 bg-primary rounded-full fixed z-[999] bottom-3 items-center justify-center right-4 p-4 hover:animate-pulse ${invisible ? "flex" : "hidden"}`}>
        <span className="block w-3 h-3 border-t-2 border-l-2 rotate-45 mt-1 text-white"></span>
    </a>
    </section>
  )
}

export default Hero