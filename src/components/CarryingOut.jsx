import React from 'react'
import { BsEmojiFrown } from "react-icons/bs";

function CarryingOut() {
  return (
    <>
        <section>
            <div className=' grid gap-7 bg-[#111111] rounded-xl justify-center text-center items-center outline outline-offset-2 outline-1 relative outline-[#292929] p-16 text-white'>
            <div className=' flex justify-center items-center text-center text-6xl'><BsEmojiFrown /></div>
            <h1 className='text-2xl md:text-4xl'>The page is under Development</h1>
            <h2 className='text-xl md:text-2xl'>Sorry for the Inconvenience</h2>
            </div>
        </section>
    </>
  )
}

export default CarryingOut