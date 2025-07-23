import React from 'react'
import banner from '../images/tech-girl.jpg'

const Header = () => {
  return (
    <section className='container px-4 py-6 relative'>
        <div className='w-full h-[500px] overflow-hidden rounded-lg'>
            <img src={banner}
            className='w-full h-full object-cover rounded-lg'
             />
        </div>
    </section>
  )
}

export default Header