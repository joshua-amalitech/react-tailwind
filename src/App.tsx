import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { IndexView } from './views/IndexView'
import { AboutView } from './views/AboutView'

export const App : FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <IndexView /> }/>
          <Route path='/about' element={ <AboutView /> }/>
          {/* <Route path='/contact' element={ <IndexPage /> }/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
