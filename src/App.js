import React from 'react'

import Main from './pages/Main'
import Auth from "./pages/Auth"
import Categories from "./pages/Categories";

import { BrowserRouter, Route } from 'react-router-dom'
import Footer from "./components/Footer";
import ContentPage from "./pages/ContentPage";

function App() {
  const categories = {
    factData: [
      {id: "fizteh", title: 'ФИЗИКО-ТЕХНИЧЕСКИЙ ФАКУЛЬТЕТ'},
      {id: 1, title: 'ФАКУЛЬТЕТ МАТЕМАТИКИ И ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ'},
      {id: 2, title: 'ФАКУЛЬТЕТ ЭКОНОМИКИ И ТУРИЗМА'},
      {id: 3, title: 'ФАКУЛЬТЕТ КЫРГЫЗСКОЙ ФИЛОЛОГИИ, ИСТОРИИ, ПЕДАГОГИКИ И ИСКУССТВА'},
      {id: 4, title: 'ФАКУЛЬТЕТ ЕСТЕСТВЕННЫХ НАУК И ФИЗИЧЕСКОГО ВОСПИТАНИЯ'},
      {id: 5, title: 'ФАКУЛЬТЕТ РУССКОЙ ФИЛОЛОГИИ И ИНОСТРАННЫХ ЯЗЫКОВ'},
      {id: 6, title: 'ЦЕНТР НЕПРЕРЫВНОГО ОБРАЗОВАНИЯ'},
      {id: 7, title: 'КАФЕДРА ПЕДАГОГИКИ И ПСИХОЛОГИИ'},
      {id: 8, title: 'КУРСЫ ПОДГОТОВКИ ВОДИТЕЛЕЙ}'}
    ],
    studData: [
      {id: 0, title: "СТУДЕНЧЕСКАЯ ЖИЗНЬ"},
      {id: 1, title: "СТИПЕНДИИ"},
      {id: 2, title: "СТУДЕНЧЕСКИЙ СОЮЗ"},
      {id: 3, title: "КОНТРАКТНОЕ ОБУЧЕНИЕ"},
      {id: 4, title: "СТУДЕНЧЕСКИЙ ТЕАТР «ЖАЛЫН»"},
      {id: 5, title: "МЕДИЦИНСКОЕ ОБСЛУЖИВАНИЕ"}
    ]
  }

  return (
    <BrowserRouter>
      <div className="bg-body text-body font-body">
        <div className="container mx-auto px-4">

          <Route exact path="/">
            <Main/>
          </Route>

          <Route path="/auth">
            <Auth/>
          </Route>

          <Route path="/faculties">
            <Categories data={categories.factData} url='faculteit' />
          </Route>

          <Route path="/faculteit/:id">
            <ContentPage />
          </Route>

          <Route path="/student">
            <Categories data={categories.studData} />
          </Route>

          <Route path="/projects">
            <ContentPage />
          </Route>

        <hr/>
        <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
