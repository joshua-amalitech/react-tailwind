import React from 'react'

export const Section = () => {
    const image = require("../assets/images/island.jpg")
    return (
        <div className='bg-violet-50'>
            <div className='max-w-[1240px] mx-auto flex items-center p-4 py-12'>
                <img className='max-w-[500px] h-3/6 mx-auto rounded-lg' src={image} alt="" />
                <div className='px-12 py-4'>
                    <span className='text-emerald-500 font-serif'>Convenience</span>
                    <h1 className='text-2xl font-medium tracking-wide'>Web-based Debugging Tool</h1>
                    <p className='text-gray-600 pt-4'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique fuga,
                        quia suscipit voluptatibus nam maiores temporibus velit unde consequatur
                        quibusdam adipisci reiciendis, quae sequi, saepe architecto excepturi ipsam odio pariatur?
                    </p>
                </div>
            </div>
        </div>
    );
}
