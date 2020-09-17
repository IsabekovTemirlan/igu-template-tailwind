import React from 'react'
import shieldImg from '../assets/placeholders/icons/shield.svg'

export default function Adds() {
  return (
    <section className="py-8 px-4">
      <h2 className="text-3xl text-center mb-8 font-heading">Объявления</h2>
      <div className="flex flex-wrap -mx-4 -mb-6">
        <div className="lg:w-1/3 px-4 mb-6">
          <img src={shieldImg} alt="" />
          <h3 className="text-xl my-2 font-heading">High durability</h3>
          <p className="text-gray-500 leading-relaxed">Forget about paper jams with our increased stability product. Ideal
          for high-quality printing, colour printing and photocopying.</p>
        </div>
        <div className="lg:w-1/3 px-4 mb-6">
          <img src={shieldImg} alt="" />
          <h3 className="text-xl my-2 font-heading">Versatility</h3>
          <p className="text-gray-500 leading-relaxed">Multi-functional paper for various office needs. Snow-white sheets
          will shine bright like diamond for many years.</p>
        </div>
        <div className="lg:w-1/3 px-4 mb-6">
          <img src={shieldImg} alt="" />
          <h3 className="text-xl my-2 font-heading">Value-based price</h3>
          <p className="text-gray-500 leading-relaxed">The best combination of quality and economy comes with Dunder Mifflin
          paper. The offer includes paper in wide range of density and sizes.</p>
        </div>
      </div>
    </section>
  )
}
