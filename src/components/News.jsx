import React, { useState } from 'react'
import { fillPortion } from '../common/fillPortion'

function Paginator({ total, onNewsChange, curentPortionId }) {
  const totalArr = new Array(total).fill(0)

  return (
    <div className="flex p-4">
      <ul className="flex mx-auto list-reset border border-grey-light rounded">
        <li><button onClick={() => onNewsChange(curentPortionId - 1)} className="block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500 border-r border-grey-light">Пред</button></li>

        {totalArr.map((i, id) => <li key={id} onClick={() => onNewsChange(id)}>
          <button className="block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500 border-r border-grey-light" href="/">{id + 1}</button>
        </li>)}

        <li>
          <button 
            onClick={() => onNewsChange(curentPortionId + 1)}
            className="block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500">След
          </button>
        </li>
      </ul>
    </div>
  )
}

function NewsCard({ news }) {

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

export default function News() {
  const news = [
    {
      id: 1,
      title: '1',
      img: 'http://main.iksu.kg/wp-content/uploads/2020/09/118883994_2854697148094587_1396801697794662204_o.jpg',
      date: '4 cентября 2019',
      author: 'Isabekov Temirlan',
      description: '4-сентября 2020 года рабочая команда Иссык-Кульского государственного университета проекта EGEA «Укрепление зеленой экономики в трех странах Азии: Индия, Кыргызстан, Непал» финансируемой программой ERASMUS+ провели семинар-тренинг для государственных и муниципальных служащих и сотрудников природоохранных организаций на тему «Продвижение зеленой экономики в Иссык-Кульской области».'
    },
    {
      id: 2,
      title: '2',
      img: 'http://main.iksu.kg/wp-content/uploads/2020/09/118683053_2850597355171233_1153765487774805822_o.jpg',
      date: '4 cентября 2019',
      author: 'Isabekov Temirlan',
      description: '4-сентября 2020 года рабочая команда Иссык-Кульского государственного университета проекта EGEA «Укрепление зеленой экономики в трех странах Азии: Индия, Кыргызстан, Непал» финансируемой программой ERASMUS+ провели семинар-тренинг для государственных и муниципальных служащих и сотрудников природоохранных организаций на тему «Продвижение зеленой экономики в Иссык-Кульской области».'
    },
    {
      id: 3,
      title: '3',
      img: 'http://main.iksu.kg/wp-content/uploads/2020/09/118883994_2854697148094587_1396801697794662204_o.jpg',
      date: '4 cентября 2019',
      author: 'Isabekov Temirlan',
      description: '4-сентября 2020 года рабочая команда Иссык-Кульского государственного университета проекта EGEA «Укрепление зеленой экономики в трех странах Азии: Индия, Кыргызстан, Непал» финансируемой программой ERASMUS+ провели семинар-тренинг для государственных и муниципальных служащих и сотрудников природоохранных организаций на тему «Продвижение зеленой экономики в Иссык-Кульской области».'
    },
    {
      id: 4,
      title: '4',
      img: 'http://main.iksu.kg/wp-content/uploads/2020/09/118883994_2854697148094587_1396801697794662204_o.jpg',
      date: '4 cентября 2019',
      author: 'Isabekov Temirlan',
      description: '4-сентября 2020 года рабочая команда Иссык-Кульского государственного университета проекта EGEA «Укрепление зеленой экономики в трех странах Азии: Индия, Кыргызстан, Непал» финансируемой программой ERASMUS+ провели семинар-тренинг для государственных и муниципальных служащих и сотрудников природоохранных организаций на тему «Продвижение зеленой экономики в Иссык-Кульской области».'
    },
    {
      id: 5,
      title: '5',
      img: 'http://main.iksu.kg/wp-content/uploads/2020/09/118683053_2850597355171233_1153765487774805822_o.jpg',
      date: '4 cентября 2019',
      author: 'Isabekov Temirlan',
      description: '4-сентября 2020 года рабочая команда Иссык-Кульского государственного университета проекта EGEA «Укрепление зеленой экономики в трех странах Азии: Индия, Кыргызстан, Непал» финансируемой программой ERASMUS+ провели семинар-тренинг для государственных и муниципальных служащих и сотрудников природоохранных организаций на тему «Продвижение зеленой экономики в Иссык-Кульской области».'
    },
    {
      id: 6,
      title: '6',
      img: 'http://main.iksu.kg/wp-content/uploads/2020/09/118883994_2854697148094587_1396801697794662204_o.jpg',
      date: '4 cентября 2019',
      author: 'Isabekov Temirlan',
      description: '4-сентября 2020 года рабочая команда Иссык-Кульского государственного университета проекта EGEA «Укрепление зеленой экономики в трех странах Азии: Индия, Кыргызстан, Непал» финансируемой программой ERASMUS+ провели семинар-тренинг для государственных и муниципальных служащих и сотрудников природоохранных организаций на тему «Продвижение зеленой экономики в Иссык-Кульской области».'
    },
    {
      id: 1,
      title: '1',
      img: 'http://main.iksu.kg/wp-content/uploads/2020/09/118883994_2854697148094587_1396801697794662204_o.jpg',
      date: '4 cентября 2019',
      author: 'Isabekov Temirlan',
      description: '4-сентября 2020 года рабочая команда Иссык-Кульского государственного университета проекта EGEA «Укрепление зеленой экономики в трех странах Азии: Индия, Кыргызстан, Непал» финансируемой программой ERASMUS+ провели семинар-тренинг для государственных и муниципальных служащих и сотрудников природоохранных организаций на тему «Продвижение зеленой экономики в Иссык-Кульской области».'
    },
    {
      id: 2,
      title: '2',
      img: 'http://main.iksu.kg/wp-content/uploads/2020/09/118683053_2850597355171233_1153765487774805822_o.jpg',
      date: '4 cентября 2019',
      author: 'Isabekov Temirlan',
      description: '4-сентября 2020 года рабочая команда Иссык-Кульского государственного университета проекта EGEA «Укрепление зеленой экономики в трех странах Азии: Индия, Кыргызстан, Непал» финансируемой программой ERASMUS+ провели семинар-тренинг для государственных и муниципальных служащих и сотрудников природоохранных организаций на тему «Продвижение зеленой экономики в Иссык-Кульской области».'
    },
    {
      id: 3,
      title: '3',
      img: 'http://main.iksu.kg/wp-content/uploads/2020/09/118883994_2854697148094587_1396801697794662204_o.jpg',
      date: '4 cентября 2019',
      author: 'Isabekov Temirlan',
      description: '4-сентября 2020 года рабочая команда Иссык-Кульского государственного университета проекта EGEA «Укрепление зеленой экономики в трех странах Азии: Индия, Кыргызстан, Непал» финансируемой программой ERASMUS+ провели семинар-тренинг для государственных и муниципальных служащих и сотрудников природоохранных организаций на тему «Продвижение зеленой экономики в Иссык-Кульской области».'
    },
    {
      id: 4,
      title: '4',
      img: 'http://main.iksu.kg/wp-content/uploads/2020/09/118883994_2854697148094587_1396801697794662204_o.jpg',
      date: '4 cентября 2019',
      author: 'Isabekov Temirlan',
      description: '4-сентября 2020 года рабочая команда Иссык-Кульского государственного университета проекта EGEA «Укрепление зеленой экономики в трех странах Азии: Индия, Кыргызстан, Непал» финансируемой программой ERASMUS+ провели семинар-тренинг для государственных и муниципальных служащих и сотрудников природоохранных организаций на тему «Продвижение зеленой экономики в Иссык-Кульской области».'
    },
    {
      id: 5,
      title: '5',
      img: 'http://main.iksu.kg/wp-content/uploads/2020/09/118683053_2850597355171233_1153765487774805822_o.jpg',
      date: '4 cентября 2019',
      author: 'Isabekov Temirlan',
      description: '4-сентября 2020 года рабочая команда Иссык-Кульского государственного университета проекта EGEA «Укрепление зеленой экономики в трех странах Азии: Индия, Кыргызстан, Непал» финансируемой программой ERASMUS+ провели семинар-тренинг для государственных и муниципальных служащих и сотрудников природоохранных организаций на тему «Продвижение зеленой экономики в Иссык-Кульской области».'
    },
    {
      id: 6,
      title: '6',
      img: 'http://main.iksu.kg/wp-content/uploads/2020/09/118883994_2854697148094587_1396801697794662204_o.jpg',
      date: '4 cентября 2019',
      author: 'Isabekov Temirlan',
      description: '4-сентября 2020 года рабочая команда Иссык-Кульского государственного университета проекта EGEA «Укрепление зеленой экономики в трех странах Азии: Индия, Кыргызстан, Непал» финансируемой программой ERASMUS+ провели семинар-тренинг для государственных и муниципальных служащих и сотрудников природоохранных организаций на тему «Продвижение зеленой экономики в Иссык-Кульской области».'
    }
  ]

  const portion = []
  const [curentPortionId, setcurentPortionId] = useState(0)

  let newsTotal = news.length / 3
  let portionId = 0

  fillPortion(portion, news, portionId)

  function onNewsChange(id) {
    (id < newsTotal && id > 0) && setcurentPortionId(id)  
  }

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl text-center mb-8 font-heading">Новости</h2>
      <div className="flex flex-wrap -mx-4">
        <NewsCard news={portion[curentPortionId]} />
      </div>
      <Paginator total={newsTotal} onNewsChange={onNewsChange} curentPortionId={curentPortionId} />
    </section>
  )
}
