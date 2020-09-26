import React from 'react'
import Header from "../components/Header";
import error from '../assets/placeholders/pictures/error.svg'

export default function Auth() {
  return (
    <>
      <Header />
      <section className="my-12 py-8 px-4 text-center">
        <h2 className="text-5xl font-heading">Error 404</h2>
        <p className="text-gray-500">Page not found</p>
        <img className="max-w-auto md:max-w-sm my-12 mx-auto" src={error} alt=""/>
      </section>
    </>
  )
}
