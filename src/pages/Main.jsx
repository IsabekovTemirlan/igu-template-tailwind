import React from 'react'

import MainSlider from '../components/MainSlider'
import MoodleAvn from '../components/MoodleAvn'
import Projects from '../components/Projects'
import News from '../components/News'
import Adds from '../components/Adds'
import ContactForm from '../components/ContactForm'
import Header from "../components/Header";


export default function () {
  return (
    <>
      <Header main />
      <MainSlider />
      <hr/>
      <MoodleAvn />
      <hr/>
      <Projects />
      <hr/>
      <News />
      <hr/>
      <Adds />
      <hr/>
      <ContactForm />
    </>
  )
}


