import React from 'react'
import Navbar from '../components/Navbar'

export default function page() {
  return (
    <div className='w-full'>
    <Navbar />
    <div className="md:flex">
        <div className="p-3 m-auto md:w-full">
            <h1 className="text-4xl font-semibold mb-4 hover:translate-x-12 hover:uppercase">Let Us find your forever</h1>
            <p className="font-sans text-justify hover:uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non magni autem debitis vel modi quae, quis atque tempore eligendi voluptates dolores, aliquam accusantium vero est explicabo ipsa rerum incidunt corporis iusto officia enim consequuntur!</p>
            <button className="w-32 h-10 rounded-lg mt-10 bg-yellow-400 font-semibold hover:bg-red-400 hover:translate-x-10">Get Started</button>
        </div>
        <div className="w-full">
            <img className="h-auto md:h-96 object-fit w-full" src="https://images.pexels.com/photos/13261147/pexels-photo-13261147.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Background" />
        </div>
    </div>
</div>

  )
}
