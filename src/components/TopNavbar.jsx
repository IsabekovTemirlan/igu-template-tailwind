import React from 'react'
import logo from '../assets/placeholders/pictures/logo.png'

export default function () {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-gray-100 p-2">

      <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
        <img className="header-logo" src={logo} alt="" />
      </div>

      <div className="block lg:hidden">
        <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>

      <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
        <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 uppercase text-xs text-blue-900 hover:text-blue-700"
          href="/">Наука</a>
        <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 uppercase text-xs text-blue-900 hover:text-blue-700"
          href="/">Международные
            связи</a>
        <a className="block lg:inline-block mt-4 lg:mt-0 uppercase text-xs text-blue-900 hover:text-blue-700"
          href="/">Отделы</a>
      </div>

      <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
        <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 uppercase text-xs text-blue-900 hover:text-blue-700"
          href="/">Центры</a>
        <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 uppercase text-xs text-blue-900 hover:text-blue-700"
          href="/">Библиотека</a>
        <a className="block lg:inline-block mt-4 lg:mt-0 uppercase text-xs text-blue-900 hover:text-blue-700"
          href="/">Контакты</a>
      </div>
      
    </nav>
  )
}
