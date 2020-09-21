import React from 'react'

export default function ({ total, onNewsChange }) {
  const totalArr = new Array(total).fill(0)

  return (
    <div className="flex p-4">
      <ul className="flex mx-auto list-reset border border-grey-light rounded">
        <li>
          <button
            onClick={() => onNewsChange('prev')}
            className="block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500 border-r border-grey-light"
          >Пред</button>
        </li>

        {totalArr.map((_, id) => <li key={id} onClick={() => onNewsChange(id)}>
          <button className="block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500 border-r border-grey-light" href="/">{id + 1}</button>
        </li>)}

        <li>
          <button
            onClick={() => onNewsChange('next')}
            className="block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500"
          >След</button>
        </li>
      </ul>
    </div>
  )
}