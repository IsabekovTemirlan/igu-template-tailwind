import React from 'react'

export default function ({ total, onNewsChange, currentId }) {
  const disabled = "opacity-50 cursor-not-allowed"
  
  let totalArr = total > 10 ? new Array(10).fill(0) : new Array(total).fill(0)

  return (
    <div className="flex p-4">
      <ul className="flex mx-auto list-reset border border-grey-light rounded">
        <li>
          <button
            onClick={() => onNewsChange('prev')}
            className={`block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500 border-r border-grey-light ${currentId <= 0 && disabled}`}
          >Пред</button>
        </li>

        {totalArr.map((_, id) => <li key={id} onClick={() => onNewsChange(id)}>
          <button 
            className="block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500 border-r border-grey-light"
          >{id + 1}</button>
        </li>)}

        {total > 10 && <>
          <li onClick={() => onNewsChange("next")}>
            <button className="block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500 border-r border-grey-light"
            >. . .</button>
          </li>
          <li onClick={() => onNewsChange(total)}>
            <button className="block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500 border-r border-grey-light"
            >{total}</button>
          </li>
        </>}

        <li>
          <button
            onClick={() => onNewsChange('next')}
            className={`block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500 ${currentId === totalArr.length - 1 && disabled}`}
          >След</button>
        </li>
      </ul>
    </div>
  )
}