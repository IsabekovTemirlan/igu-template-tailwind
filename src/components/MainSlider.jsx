import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

export default function MainSlider() {

  const imgs = [
    {id: 1, url: 'http://main.iksu.kg/wp-content/uploads/2020/01/MG_0398-1200x500.jpg'},
    {id: 2, url: 'https://www.ferra.ru/imgs/2020/06/05/12/3943580/03bad18ba8715a89cd419923e803fc0655ab78a4.jpg'},
    {id: 3, url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200' }
  ]

  return (
    <section className="py-12 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <Slider>
          {imgs.map( img => <img key={img.id} className="rounded shadow-md" src={img.url} alt="" />)}
        </Slider>
        <div className="text-center mt-8 mb-6">
          {imgs.map(i => <div key={i.id} className="inline-flex items-center justify-center h-3 w-3 mr-2 bg-gray-600 rounded-full"></div>)}
        </div>

        <div>
          <h3 className="text-2xl mb-4 font-heading">Добро пожаловать!</h3>
          <p className="text-gray-500 leading-relaxed">Мы всегда рады видеть вас у дверях нашего университета. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Distinctio incidunt recusandae repudiandae quidem ut est ex,
          labore, porro aut nulla natus voluptas cum quisquam beatae officia sit. Maiores nihil earum numquam, harum
            illo similique, enim, reprehenderit dolore deleniti iste omnis.</p>
        </div>

      </div>

    </section>
  )
}
