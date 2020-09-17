import React from 'react'
import homeIcon from '../assets/placeholders/icons/home.svg'
import mobileIcon from '../assets/placeholders/icons/mobile.svg'
import messageIcon from '../assets/placeholders/icons/message.svg'

export default function ContactForm() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl mb-8 text-center font-heading">Свяжитесь с нами!</h2>
      <div className="w-full max-w-2xl mx-auto mb-12">
        <form>
          <div className="flex mb-4 -mx-2">
            <div className="w-full px-2">
              <input
                className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                type="email" placeholder="Email" />
            </div>
          </div>
          <div className="mb-4">
            <textarea
              className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
              placeholder="Напишите что-то..." rows="5">
            </textarea>
          </div>
          <div>
            <button
              className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">Отправить</button>
          </div>
        </form>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center -mx-4">
        <div className="px-4">
          <img className="inline-block w-8 h-8 pr-2" src={homeIcon} alt="" />
          <span>722200, КР, г. Каракол, ул.Абдрахманова, 103</span>
        </div>
        <div className="px-4">
          <img className="inline-block w-8 h-8 pr-2" src={mobileIcon} alt="" />
          <span>+996 3922 50123</span>
        </div>
        <div className="px-4">
          <img className="inline-block w-8 h-8 pr-2" src={messageIcon} alt="" />
          <span>interiksu@gmail.com</span>
        </div>
      </div>
    </section>
  )
}
