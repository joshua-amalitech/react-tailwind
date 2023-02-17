import React from 'react'

type SectionProps = {
    className: string
}

export const Section = ({className} : SectionProps) => {
  return (
    <div className={className}>
        <div className='px-8 py-16 flex flex-col md:flex-row items-center'>
            <img src='images/hero_background.png' className='object-cover sm:w-sm md:w-1/3 aspect-square rounded-xl'/>
            <div className='py-4 md:px-6 md:w-2/3'>
                <span className='text-sm'>Urgent</span>
                <h2 className='my-2 font-medium text-xl'>Healthcare Facility Needed in Adjobue-Eastern Ghana as Death Rate Rises</h2>
                <p className='text-gray-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore accusamus iste animi 
                    cupiditate quis eius rerum consequuntur. Sequi doloribus veritatis, dignissimos ea 
                    qui facilis consectetur, cumque nisi iure quae hic.
                </p>
                <div className='flex items-center m-2'>
                    <div className='mt-1 flex -space-x-1 overflow-hidden'>
                        <img className='inline-block h-8 w-8 rounded-full ring-2 ring-white' src='images/hero_background.png'/>
                        <img className='inline-block h-8 w-8 rounded-full ring-2 ring-white' src='images/hero_background.png'/>
                        <img className='inline-block h-8 w-8 rounded-full ring-2 ring-white' src='images/hero_background.png'/>
                    </div>
                    <span className='mx-3 text-sm font-medium text-gray-600'>Liked by 6 users</span>
                </div>
            </div>
        </div>
    </div>
  )
}
