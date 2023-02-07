import React from 'react'

export const Hero = () => {
    return (
        <div className='max-w-[1240px] h-4/6 w-full mx-auto text-center flex flex-col justify-center items-center'>
            <p className='font-semibold text-sm uppercase text-emerald-900 py-4'>Trying React in Style</p>
            <h1 className='font-semibold text-2xl md:text-4xl'>React and Tailwind Combo</h1>
            <p className='font-bold'>Fast, Easy and flexible</p>
            <p className='text-gray-500 max-w-[800px] pt-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Aliquam deserunt at perferendis quo veritatis? Ullam nobis doloremque quam, 
                earum iusto numquam vitae, commodi tempora eos excepturi facilis non cupiditate ex!
            </p>
            <button className='font-medium py-2 w-[150px] my-6 rounded-md bg-emerald-500 text-black'>Join Us</button>
        </div>
    )
}
