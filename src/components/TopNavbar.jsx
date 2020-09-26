import React, {useState} from 'react'

import logo from '../assets/placeholders/pictures/logo.png'

import { Link } from "react-router-dom";

export default function () {
  const [menu, setMenu] = useState(true)

  function menuHandler() {
    console.log(menu)
    setMenu(!menu)
  }

  return (
    <nav className="flex flex-wrap items-center justify-between bg-gray-100 p-2">

      <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
        <img className="header-logo" src={logo} alt="" />
      </div>

      <div className={`block lg:${menu ? 'hidden' : ''}`}>
        <button onClick={menuHandler} className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>

      <div className={`navbar-menu ${menu ? 'hidden' : ''} lg:order-1 lg:block w-full lg:w-2/5`}>
        <Link className="block lg:inline-block mt-4 lg:mt-0 mr-10 uppercase text-xs text-blue-900 hover:text-blue-700"
          to="/science">Наука</Link>
        <Link className="block lg:inline-block mt-4 lg:mt-0 mr-10 uppercase text-xs text-blue-900 hover:text-blue-700"
          to="/internationalRelations">Международные связи</Link>
        <Link className="block lg:inline-block mt-4 lg:mt-0 uppercase text-xs text-blue-900 hover:text-blue-700"
            to="/departments">Отделы</Link>
      </div>

      <div className={`navbar-menu ${menu ? 'hidden' : ''} lg:order-3 lg:block w-full lg:w-2/5 lg:text-right`}>
        <Link className="block lg:inline-block mt-4 lg:mt-0 mr-10 uppercase text-xs text-blue-900 hover:text-blue-700"
          to="/centers">Центры</Link>
        <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 uppercase text-xs text-blue-900 hover:text-blue-700"
          href="/">Библиотека</a>
        <Link className="block lg:inline-block mt-4 lg:mt-0 uppercase text-xs text-blue-900 hover:text-blue-700"
          to="/contacts">Контакты</Link>
      </div>
      
    </nav>
  )
}
