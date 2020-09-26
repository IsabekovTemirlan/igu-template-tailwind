import React from 'react'

import inst from '../assets/placeholders/icons/instagram.svg'
import fb from '../assets/placeholders/icons/facebook.svg'

export default function Footer() {
  const date = new Date()
  return (
    <footer className="flex flex-wrap items-center justify-between p-4">
      <div className="w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center">&copy; {date.getFullYear()} Иссык-Кульский государственный университет имени Касыма Тыныстанова</div>
      <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
        <div className="mx-auto lg:mx-0 lg:ml-auto">
          <a className="inline-block mt-0 text-blue-900 hover:text-blue-700" href="/">Главная</a>
          <a className="inline-block mt-0 ml-8 text-blue-900 hover:text-blue-700" href="/">Отделы</a>
          <a className="inline-block mt-0 ml-8 text-blue-900 hover:text-blue-700" href="/">О нас</a>
        </div>
        <div className="flex justify-center mt-4 lg:mt-0 lg:ml-8">
          <a href="/"><img className="w-6 h-6 " src={inst} alt="" /></a>
        </div>
        <div className="flex justify-center mt-4 lg:mt-0 lg:ml-8">
          <a href="/"><img className="w-6 h-6 " src={fb} alt="" /></a>
        </div>
      </div>
    </footer>
  )
}
