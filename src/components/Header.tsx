import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const Header : FC = () => {
  return (
    <header className='p-4 shadow-md'>
        <div className='max-w-7xl px-4 py-2 mx-auto flex justify-between'>
            <div>Hellow</div>
            <nav>
              <ul className='flex'>
                <li className='px-4 text-gray-600 cursor-pointer transition ease-in-out hover:text-gray-800'>Home</li>
                <li className='px-4 text-gray-600 cursor-pointer transition ease-in-out hover:text-gray-800'>
                  <Link to="/about">About</Link>
                </li>
                <li className='px-4 text-gray-600 cursor-pointer transition ease-in-out hover:text-gray-800'>Contact</li>
              </ul>
            </nav>
        </div>
    </header>
  )
}
