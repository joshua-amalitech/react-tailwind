import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { IndexPage } from './views/Index'

export const App : FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <IndexPage /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
