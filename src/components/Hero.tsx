import React from 'react'

export const Hero = () => {
    return (
        <div className='relative h-[400px]'>

            <div className="bg-cover bg-center bg-no-repeat bg-fixed brightness-50 h-full" style={{
                backgroundImage: 'url(images/hero_background.png)',
            }}>
            </div>

            <div className='text-center absolute top-0 bottom-0 left-0 right-0 w-full flex justify-center items-center'>
                <div className=' max-w-xl'>
                    <span className='text-base text-green-300 font-medium'>Working Together</span>
                    <p className='text-xl text-gray-300 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores quasi aspernatur expedita magnam consectetur illum labore, vitae,
                    </p>
                </div>
            </div>

            <div className='text-center max-w-2xl mx-auto px-6 translate-y-[-50%]'>
                <input className='px-4 py-3 rounded-lg shadow-lg w-full outline-0 block' name="search" type="text" placeholder='Search for projects to help out.....' />
            </div>

        </div>
    )
}
