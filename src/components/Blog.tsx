import React from 'react'

const Blog = () => {
  return (
    <section id="blog" className="pt-36 pb-32 bg-slate-100 w-full dark:bg-dark">
        <div className="container mx-auto">
            <div className="w-full px-4">

                <div className="max-w-xl mx-auto text-center mb-16">
                    <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
                    <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Tulisan Terkini</h2>
                    <p className="font-medium text-shadow-md text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore sequi aspernatur rem!.</p>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10 dark:bg-slate-800">
                        <img src="https://images.unsplash.com/photo-1747599309107-20504ba6b8dd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" className="w-full" />
                        <div className="py-8 px-6">
                            <h3 className=""><a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white">Tips Belajar Programming</a></h3>
                            <p className="font-medium text-secondary text-base mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, enim.</p>
                            <a href="#" className="font-medium bg-primary py-3 px-6 text-sm text-white hover:opacity-80">Baca Selengkapnya</a>
                        </div>
                    </div>
                </div>

                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10 dark:bg-slate-800">
                        <img src="https://images.unsplash.com/photo-1747629382443-4176ca83b5de?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt="" className="w-full" />
                        <div className="py-8 px-6">
                            <h3 className=""><a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white">Review keyboard</a></h3>
                            <p className="font-medium text-secondary text-base mb-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus unde qui sed doloremque.</p>
                            <a href="#" className="font-medium bg-primary py-3 px-6 text-sm text-white hover:opacity-80">Baca Selengkapnya</a>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10 dark:bg-slate-800">
                        <img src="https://images.unsplash.com/photo-1747629382448-fde8a1fc8391?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" alt="" className="w-full" />
                        <div className="py-8 px-6">
                            <h3 className=""><a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white">Menikmati Secangkir Kopi</a></h3>
                            <p className="font-medium text-secondary text-base mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, enim. Lorem ipsum dolor sit.</p>
                            <a href="#" className="font-medium bg-primary py-3 px-6 text-sm text-white hover:opacity-80">Baca Selengkapnya</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog