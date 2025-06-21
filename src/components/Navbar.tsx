import { useEffect, useRef, useState } from "react"


const Navbar = () => {
    const [navFixed, setNavFixed] = useState(false);
    const [hamburger, setHamburger] = useState<boolean>();
    const [navMenu, setNavMenu] = useState(false)
    const [darkMode, setDarkMode] = useState(() => {
        // check saved preference or system preference
    if (localStorage.theme === 'dark') return true;
    if (localStorage.theme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

    const navRef = useRef<HTMLElement>(null)
    const buttonRef =useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const handleSroll = () => {
            if(window.scrollY > 50) {
                setNavFixed(true)
                setHamburger(false)
                setNavMenu(false)
            } else {
                setNavFixed(false)
            }
        };

        const handleClickOutside = (event:  MouseEvent) => {
            if(navRef.current && !navRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setNavMenu(false)
                setHamburger(false)
            }
        }
        window.addEventListener('click', handleClickOutside);
        window.addEventListener('scroll', handleSroll);
        return() => {
            window.removeEventListener('scroll', handleSroll)
            window.removeEventListener('click', handleClickOutside)
        }
    },[])

    const handleHamburger = () => {
        setHamburger(!hamburger);
        setNavMenu(!navMenu)
    }


  useEffect(() => {
      const root = window.document.documentElement;
    if (darkMode) {
        root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);
  return (
    <header className={`top-0 left-0 items-center flex z-50 w-full px-4 transition-all duration-300 ${navFixed && "navbar-fixed"}`}>
        <div className="top-0 left-0 w-full">
            <div className="flex items-center justify-between relative">
                <div className="px-4">
                    <a href="#home" className="font-bold text-primary text-lg block py-6">FaisalFais</a>
                </div>
                <div className="flex items-center px-4">
                    <button ref={buttonRef} onClick={handleHamburger} id="hamburger" name="hamburger" className={`lg:hidden ${hamburger ? "hamburger-active" : "block absolute right-4"}`}>
                        <span className="hamburger hamburger-transition origin-top-left"></span>
                        <span className="hamburger hamburger-transition"></span>
                        <span className="hamburger hamburger-transition origin-bottom-left"></span>
                    </button>

                    <nav id="nav-menu" ref={navRef} onClick={handleHamburger} className={` absolute py-5 bg-white shadow-lg rounded-lg w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none transition duration-300 ease-in-out dark:bg-dark dark:shadow-slate-800 lg:dark:bg-transparent ${navMenu ? "block" : "hidden"}`}>
                        <ul className="lg:flex">
                            <li className="group">
                                <a href="#home" className="navLi">Beranda</a>
                            </li>
                            <li className="group">
                                <a href="#about" className="navLi">Tentang Saya</a>
                            </li>
                            <li className="group">
                                <a href="#portfolio" className="navLi">Portfolio</a>
                            </li>
                            <li className="group">
                                <a href="#clients" className="navLi">Clients</a>
                            </li>
                            <li className="group">
                                <a href="#blog" className="navLi">Blog</a>
                            </li>
                            <li className="group">
                                <a href="#contact" className="navLi">Contact</a>
                            </li>
                            <li className="flex items-center pl-6 sm:mt-3 lg:mt-0">
                                <label htmlFor="toggle" className="">
                                    <div className="flex">
                                        <span className="text-slate-800 text-sm mx-2 dark:text-slate-300">
                                            Light
                                        </span>
                                        <div  className="flex items-center">
                                            <input type="checkbox" onClick={() => setDarkMode(!darkMode)} id="toggle" className="hidden sr-only peer"/>
                                            <div className=" flex w-9 h-5 bg-slate-500 rounded-full p-1">
                                            </div>
                                            <div className="absolute bg-white w-4 h-4 rounded-full mx-[2px] peer-checked:translate-x-4 peer-checked:bg-dark transition duration-300"></div>
                                        </div>
                                        <span className="text-sm mx-2 text-slate-700 dark:text-slate-300">
                                            Dark
                                        </span>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar