import React from 'react'
import Header from "../components/Header";

import { useParams } from 'react-router-dom'

export default function () {
  let { id } = useParams();

  function getContentInf(contentId) {
    switch (contentId) {
      case 'road':
        return (
          <h1>ROad</h1>
        )
      case 'fizteh':
        return (
          <h1>Fizteh</h1>
        )
      default:
        return <h1>Page not found</h1>
    }
  }


  return (
    <>
      <Header />
      <h1>Page inf of {id}</h1>
      {getContentInf(id)}
    </>
  )
}