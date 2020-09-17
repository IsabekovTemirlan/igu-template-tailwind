import React from 'react'

export default function Projects() {
  const projects = [
    { id: 1, link: '/', imgUrl: 'http://main.iksu.kg/wp-content/uploads/2020/01/pro1.jpg' },
    { id: 2, link: '/', imgUrl: 'http://main.iksu.kg/wp-content/uploads/2020/01/pro2.jpg' },
    { id: 3, link: '/', imgUrl: 'http://main.iksu.kg/wp-content/uploads/2020/01/pro3.jpg' },
    { id: 4, link: '/', imgUrl: 'http://main.iksu.kg/wp-content/uploads/2020/01/pro4.jpg' },
    { id: 5, link: '/', imgUrl: 'http://main.iksu.kg/wp-content/uploads/2020/01/pro5.jpg' },
    { id: 6, link: '/', imgUrl: 'http://main.iksu.kg/wp-content/uploads/2020/01/pro6.jpg' },
    { id: 7, link: '/', imgUrl: 'http://main.iksu.kg/wp-content/uploads/2020/01/pro7.jpg' },
    { id: 8, link: '/', imgUrl: 'http://main.iksu.kg/wp-content/uploads/2020/01/pro8.jpg' },
    { id: 9, link: '/', imgUrl: 'http://main.iksu.kg/wp-content/uploads/2020/01/pro9.jpg' },
    { id: 10, link: '/', imgUrl: 'http://main.iksu.kg/wp-content/uploads/2020/01/pro10.jpg' },
  ]

  return (
    <>
      <h2 className="text-3xl text-center m-4 font-heading">Проекты</h2>
      <section className="p-4">
        <div className="flex flex-wrap justify-center items-center -mx-8">
          {projects.map(proj => (
            <div key={proj.id} className="w-1/3 md:w-1/5 px-8 mb-4 md:mb-0/">
              <a href={proj.link} ><img className="transition duration-150 ease-in-out transform hover:scale-125" src={proj.imgUrl} alt="" /></a>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
