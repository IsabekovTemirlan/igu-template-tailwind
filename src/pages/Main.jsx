import React from 'react'
import TopNavbar from '../components/TopNavbar'
import Navbar from '../components/Navbar'
import MainSlider from '../components/MainSlider'
import MoodleAvn from '../components/MoodleAvn'
import Projects from '../components/Projects'
import News from '../components/News'
import Adds from '../components/Adds'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function () {
  return (
    <>
      <div className="header-bg h-full rounded">
        <TopNavbar />

        <section className="py-40 px-4 text-center rounded">
          <div className="w-full max-w-4xl mx-auto text-white">
            <h2 className="text-5xl mt-2 mb-6 leading-tight text-white font-heading font-medium">Иссык-Кульский государственный университет имени Касыма Тыныстанова</h2>
            <p className="mb-8 leading-relaxed text-white font-medium">Иссык-Кульский государственный университет имени Касыма Тыныстанова был создан постановлением Совета Народных Комиссаров Кыргызской ССР 13 июня 1940 года как двухгодичный учительский институт.</p>
            <div>
              <a className="inline-block pt-3 pb-2 px-3 leading-none text-white border-solid border-2 border-gray-100 hover:bg-blue-900 rounded-full" href="/">
                <svg className="animate-bounce inline-block pt-3 w-10 h-10 text-white hover:text-gray-400 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

      </div>

      <Navbar />
      <MainSlider />
      <hr/>
      <MoodleAvn />
      <hr/>
      <Projects />
      <hr/>
      <News />
      <hr/>
      <Adds />
      <hr/>
      <ContactForm />
      <hr/>
      <Footer />
    </>
  )
}


