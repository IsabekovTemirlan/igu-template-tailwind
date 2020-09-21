import React from 'react'

export default function({ news }) {

  if (!news) {
    return <p>No news</p>
  }
  return (
     news.map(card => (
      <div key={card.id} className="transition duration-500 ease-in-out transform hover:-translate-y-3 w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
        <div className="h-full pb-8 rounded shadow-md">
          <a href="/">
            <img className="mb-4 rounded" src={card.img} alt="" />
            <div className="px-6"><small>{card.date} | By {card.author}</small>
              <h3 className="text-xl my-3 font-heading">{card.title}</h3>
              <p className="text-gray-500">{card.description.length > 30 && card.description.substring(0, 220) + '...'}</p>
            </div>
          </a>
        </div>
      </div>
    ))
  )
}
