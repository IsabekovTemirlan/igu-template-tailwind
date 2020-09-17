import React from 'react'

export default function MoodleAvn() {
  const data = [
    {
      id: 0,
      name: 'Moodle',
      title: 'Образовательный портал MOODLE', 
      inf: 'Образовательный портал MOODLE был создан в результате реализации проектов QAMEL и SOROS', link: 'http://moodle.iksu.kg/',
      imgUrl: 'http://main.iksu.kg/wp-content/uploads/2020/01/pro9.jpg',
    },
    {
      id: 1, 
      name: 'AVN',
      title: 'Информационная система AVN', 
      inf: 'Добро пожаловать в образовательный портал AVN', 
      link: 'http://avn.iksu.kg/',
      imgUrl: 'http://main.iksu.kg/wp-content/uploads/2020/01/pro4.jpg'
    },
  ]
  const [selected, setSelected] = React.useState({})

  function onSelect(obj, e) {
    e.preventDefault()
    setSelected(obj) 
  }

  return (
    <section className="py-12 px-4">
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-full lg:w-7/12 px-4 mb-8 lg:mb-0">
          <div className="flex flex-col h-full p-8 bg-gray-200 rounded">
            <h2 className="text-3xl font-heading">{selected.title ? selected.title : data[0].title}</h2>
            <p className="max-w-sm mt-auto mb-8 text-gray-500 leading-relaxed">{selected.inf ? selected.inf : data[0].inf}</p>
            <a className="text-right text-blue-700 hover:underline" href={selected.link ? selected.link : data[0].link}>Перейти на сайт {selected.name ? selected.name : data[0].name}</a>
          </div>
        </div>
        <div className="lg:w-4/12 px-4">
          <div className="flex flex-wrap items-center justify-center -m-2">
          {data.map( card => (
            <div key={card.id} className="w-full p-2">
              <a href="/" onClick={(e) => onSelect(card, e)}>
                <img className="w-full rounded shadow-md transition duration-500 ease-in-out transform hover:scale-110"
                  src={card.imgUrl} alt=""/>
              </a>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
