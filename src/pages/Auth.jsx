import React from 'react'

export default function Auth() {
  return (
    <div className="bg-body text-body font-body">
      <div className="container mx-auto px-4">
        <section className="py-8 px-4 text-center">
          <h2 className="text-5xl font-heading">Error 404</h2>
          <p className="text-gray-500">Page not found</p>
          <img className="max-w-auto md:max-w-sm my-12 mx-auto" src="placeholders/pictures/error.svg" alt="" />
          <div>
            <a className="px-4 text-blue-700 hover:underline" href="/">Link1</a>
            <a className="px-4 text-blue-700 hover:underline" href="/">Link1</a>
            <a className="px-4 text-blue-700 hover:underline" href="/">Link1</a>
            <a className="px-4 text-blue-700 hover:underline" href="/">Link1</a>
          </div>
        </section>
      </div>
    </div>
  )
}
