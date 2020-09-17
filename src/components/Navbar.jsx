import React from 'react'

const navLists = [
  {id: 1, title: 'Главная', path: '/'},
  {id: 2, title: 'Об Университете', path: '/'},
  {id: 3, title: 'Факультеты', path: '/'},
  {id: 4, title: 'Магистратура', path: '/'},
  {id: 5, title: 'Абитуриенту', path: '/'},
  {id: 6, title: 'Студенту', path: '/'},
  {id: 7, title: 'Выпускнику', path: '/'},
  {id: 8, title: 'Колледж ИГУ', path: '/'},
  {id: 9, title: 'Контакты', path: '/'},
]

const NavItem = ({title, path}) => (
  <a href={path} className="block mt-4 lg:inline-block lg:mt-0 text-base hover:text-blue-700 uppercase ml-4 mr-4">
    {title}
  </a>
)

export default function () {
  return (
    <nav className="sticky top-0 shadow flex items-center justify-between flex-wrap z-50 bg-gray-100 p-4 rounded">

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow text-center">
          {navLists.map( item => <NavItem key={item.id} title={item.title} path={item.path}/>)}
        </div>
      </div>

    </nav>
  )
}
