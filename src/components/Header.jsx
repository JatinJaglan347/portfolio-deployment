import React, { Component } from 'react'
import { FaGithub } from "react-icons/fa";
import { NavLink} from "react-router-dom"

export class header extends Component {
    render() {
        return (
            <>
                <section className=' '>
                    <div className='pb-12 lg:pb-16 xl:pb-20'>
                        <div className=' text-white grid grid-cols-1 gap-4'>
                            <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl' >Frontend Developer</h1>
                            <div className=' flex justify-between'>
                                <h1 className='text-xl sm:text-2xl xl:text-3xl text-[#9BA1A6]'>{"-<"} Student {">-"}</h1>
                                <NavLink className={({isActive})=> `text-xl sm:text-2xl xl:text-4xl hover:text-[#2998ff] ${isActive ? " hidden" : "text-white" }` } to="/github-jatinjaglan347"><h1><FaGithub /></h1></NavLink>                                
                            </div>

                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default header