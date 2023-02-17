import React, { useState, FC } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const getIcon = (favorite: Boolean, onClick: () => void) : JSX.Element =>  {
    if (favorite) {
        return (<AiFillHeart onClick={onClick} className='text-rose-600 cursor-pointer text-2xl hover:scale-125 active:-scale-[0.05rem] transition-all ease-in-out' />)
    }

    return (<AiOutlineHeart onClick={onClick} className='text-rose-600 cursor-pointer text-2xl hover:scale-125 active:-scale-[0.05rem] transition-all ease-in-out' />)
}

export const Card : FC = () => {
    const [favorite, setFavorite]: [Boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
    
    return (
        <div className='rounded-lg'>
            <div className='w-full relative'>
                <img className="rounded-lg" src='images/hero_background.png' />
                <div className='absolute top-0 right-0 p-3'>
                    {getIcon(favorite, () => setFavorite((prev) => !prev))}
                </div>
            </div>
            <div className='p-4'>
                <span></span>
                <h2 className='font-medium text-base py-2'>Lorem, ipsum dolor sit amet consectetur</h2>
                <p className='text-sm text-gray-400'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus,
                    ipsum eum amet velit recusandae doloribus, culpa beatae maxime corrupti 
                    vel dolorem harum perferendis exercitationem optio sit, obcaecati consequatur voluptatum?
                </p>
            </div>
        </div>
    )
}
