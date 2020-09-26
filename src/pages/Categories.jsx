import React from 'react'

import Header from "../components/Header"

import { Link, useRouteMatch } from "react-router-dom";

export default function ({data, url}) {
  let { path } = useRouteMatch();

  return (
    <>
      <Header/>
      <div className="flex justify-center flex-wrap p-16">
        {data.map( ({id, title}) => (
          <div key={id} className="transition duration-500 ease-in-out transform hover:-translate-y-3 h-64 lg:w-1/4 m-8 lg:mb-0 p-4 rounded shadow-md flex items-center bg-gray-100 justify-center text-center">
            <Link to={`${url}/${id}`} className="w-full h-full contents">
              <h3 className="text-2xl">{title}</h3>
            </Link>
          </div>
        ))}
      </div>

    </>
  )
}


