import React, { useState } from 'react'

import homeIcon from '../assets/placeholders/icons/home.svg'
import mobileIcon from '../assets/placeholders/icons/mobile.svg'
import messageIcon from '../assets/placeholders/icons/message.svg'

import { Alert } from './Alert'

export default function ContactForm() {
  const [value, setValue ] = useState({
    email: '',
    message: ''
  })
  const [ alert, setAlert ] = useState({
    show: false,
    type: '',
    text: '',
    title: ''
  })

  function inputHandler(event) {
    const inputValue = event.target.value
    const inputName = event.target.name

    setValue({...value,
      [inputName]: inputValue
    })

    setAlert({...alert, show: false})
  }

  function onSubmit(event) {
    event.preventDefault()

    if (value.message || value.email !== '') {
      console.log(value)
      setAlert({...alert, show: true, type: 'green', title: 'Успех', text: 'Ваши данные отправлены!'})
    } else if (value.message || value.email === '') {
      setAlert({...alert, show: true, type: 'red', title: 'Ошибка', text: 'Пожалуйста заполните поля!'})
    }

    setValue({
      email: '',
      message: ''
    })
  }

  if (alert.type) {
    setTimeout(() => setAlert({...alert, show: false}), 5000)
  }

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl text-center font-heading">Свяжитесь с нами!</h2>
      <div className="w-full max-w-2xl mx-auto mb-12">

        <form onSubmit={onSubmit}>
          <div className="flex my-4 -mx-2">
            <div className="w-full px-2">
              <input
                className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                type="email"
                placeholder="Email"
                name="email"
                value={value.email}
                onChange={inputHandler}
              />
            </div>
          </div>
          <div className="mb-4">
            <textarea
              className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
              placeholder="Напишите что-то..."
              rows="5"
              name="message"
              value={value.message}
              onChange={inputHandler}
            >
            </textarea>
          </div>
          <div>
            <button
              className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow"
              type="submit"
            >Отправить</button>
          </div>
          {alert.show && <Alert title={alert.title} message={alert.text} type={alert.type} />}
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
