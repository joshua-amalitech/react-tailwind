import React from 'react'
import { Card } from './Card'

export const GridContainer = () => {
  return (
    <div>
        <h2 className='text-center text-2xl font-semibold'>Projects</h2>
        <div className='mx-auto w-24 h-1 rounded-full bg-sky-800 mt-2 mb-16'></div>
        <div className='mx-auto grid md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-10 px-8'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}
