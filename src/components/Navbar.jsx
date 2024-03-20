import React, { useState } from 'react';
import { Link , NavLink} from 'react-router-dom'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
return (
    <>
        <nav className=' w-full h-auto flex justify-between items-center md:flex-col md:h-screen md:justify-center md:items-center md:w-1/5 bg-[#111111] px-6 md:fixed'>


            <div className=' flex items-center md:flex-col md:h-1/4 md:items-center md:w-full lg:pt-5 lg:pb-8 '>

                <div className=" p-3">
                    <img className='rounded-full w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32 lg:rounded-xl ' src="https://media.licdn.com/dms/image/D5603AQHhClaJtvfY3Q/profile-displayphoto-shrink_400_400/0/1692246491907?e=1712188800&v=beta&t=aWcjzHTNh7w_O5r5JEqLtBHGBn7EYXs06uu3FUWe3iI" alt="" />
                </div>
                <div className=" text-white text-xl lg:text-xl xl:text-3xl lg:font-bold lg:pt-3 text-center">
                    <h1>Jatin Jaglan</h1>
                    <h1 className=' text-sm md:text-lg xl:text-xl lg:font-normal text-[#9BA1A6]'>jatinjaglan347</h1>
                </div>

            </div>

            <div className='text-white text-2xl md:hidden' onClick={toggleMenu}>
                <ion-icon name={menuOpen ? "skull-outline" : "options-outline"}></ion-icon>
            </div>

            <div className={`nav-links flex flex-col justify-center items-center text-center space-y-3 absolute py-6 -ml-6 md:-ml-6  bg-white w-screen  ${menuOpen ? 'top-[9%]' : '-top-[100%]'} md:flex-row md:bg-transparent  md:top-0 md:py-2 md:text-white md:w-auto md:relative md:h-3/4 md:text-left z-50`}>
                <ul className="flex flex-col justify-center space-y-6 md:space-y-10 lg:space-y-9  md:justify-between xl:text-xl ">
                    <NavLink className={({isActive})=> `hover:text-[#9BA1A6] duration-500 ${isActive ? "text-[#2997FF]" : "md:text-white" }` } to="/"><li className=' flex items-center'><ion-icon name="bookmarks-outline"></ion-icon>&nbsp;&nbsp;<p className=' hover:underline-offset-2 hover:underline'>Home</p></li></NavLink>
                    <NavLink className={({isActive})=> `hover:text-[#9BA1A6] duration-500 ${isActive ? "text-[#2997FF]" : "md:text-white" }` } to="/Projects"><li className=' flex items-center'><ion-icon name="construct-outline"></ion-icon>&nbsp;&nbsp;<p className=' hover:underline-offset-2 hover:underline'>Project</p></li></NavLink>
                    <NavLink className={({isActive})=> `hover:text-[#9BA1A6] duration-500 ${isActive ? "text-[#2997FF]" : "md:text-white" }` } to="/Resume"><li className=' flex items-center'><ion-icon name="newspaper-outline"></ion-icon>&nbsp;&nbsp;<p className=' hover:underline-offset-2 hover:underline'>Resume</p></li></NavLink>
                    <NavLink className={({isActive})=> `hover:text-[#9BA1A6] duration-500 ${isActive ? "text-[#2997FF]" : "md:text-white" }` } to="/About"><li className=' flex items-center'><ion-icon name="library-outline"></ion-icon>&nbsp;&nbsp;<p className=' hover:underline-offset-2 hover:underline'>About</p></li></NavLink>
                    <NavLink className={({isActive})=> `hover:text-[#9BA1A6] duration-500 ${isActive ? "text-[#2997FF]" : "md:text-white" }` } to="/Contact"><li className=' flex items-center'><ion-icon name="at-outline"></ion-icon>&nbsp;&nbsp;<p className=' hover:underline-offset-2 hover:underline'>Contact</p></li></NavLink>
                </ul>

            </div>

        </nav>
    </>
  );
}

export default Navbar;