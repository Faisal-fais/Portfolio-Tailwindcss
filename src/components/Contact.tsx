import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="pt-36 pb-32 dark:bg-slate-800 w-full">
        <div className="container mx-auto">
            <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                    <h4 className="font-semibold text-lg text-primary mb-2">Kontak</h4>
                    <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Hubungi Kami</h2>
                    <p className="font-medium text-shadow-md text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore sequi aspernatur rem!.</p>
                </div>
            </div>
            <form>
                <div className="w-full lg:w-2/3 lg:mx-auto">

                    <div className="w-full mb-8 px-4">
                        <label htmlFor="name" className="text-base text-primary font-bold">Nama</label>
                        <input type="text" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:ring-primary focus:ring-1 focus:border-primary focus:outline-none" />
                    </div>
                    <div className="w-full mb-8 px-4">
                    <label htmlFor="email" className="text-base text-primary font-bold">Email</label>
                    <input type="text" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:ring-primary focus:ring-1 focus:border-primary focus:outline-none" />
                </div>
                <div className="w-full mb-8 px-4">
                    <label htmlFor="name" className="text-base text-primary font-bold">Pesan</label>
                    <textarea typeof="text" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:ring-primary focus:ring-1 focus:border-primary h-32 focus:outline-none"></textarea>
                </div>
                <div className="w-full px-4"> 
                    <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">Kirim</button>
                </div>
            </div>
            </form>
        </div>
    </section>
  )
}

export default Contact