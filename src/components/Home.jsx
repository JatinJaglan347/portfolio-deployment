import React, { Component } from 'react'
import { GiTrophyCup } from "react-icons/gi";
import { IoNewspaperOutline } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import Skills from './Skills.jsx';
import Quote from './Quote.jsx';
import { Link , NavLink} from 'react-router-dom'

export class Home extends Component {
    static propTypes = {}

    render() {
        return (
            <>
                <section className=' bg-[#161616]'>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 text-white">
                        <div className=" ">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                                <div className="bg-[#111111] rounded-xl outline outline-offset-2 outline-1 relative outline-[#292929] xl:p-4 lg:p-0 p-2 hover:shadow-lg hover:shadow-[#2997FF] hover:rounded-sm duration-700">
                                    <div className=' p-6 lg:p-7 xl:p-9'>
                                        <Link to="/Carrying-Out" className=' text-center justify-center items-center grid grid-cols-1 gap-4 lg:gap-5 xl:gap-6'>
                                            <h1 className=' m-auto h-full text-4xl lg:text-5xl xl:text-6xl'><GiTrophyCup /></h1>
                                            <h1 className='text-xl xl:text-2xl '>Carrying Out</h1>
                                        </Link>
                                    </div>
                                </div>
                                <div className="bg-[#111111] rounded-xl outline outline-offset-2 outline-1 relative outline-[#292929] xl:p-4 lg:p-0 p-2">
                                    <div className=' p-5 lg:p-7 xl:p-9'>
                                        <div className=' text-center justify-center items-center grid grid-cols-1 gap-4 lg:gap-5 xl:gap-6' >
                                            <h1 className=' my-auto text-xl xl:text-2xl '>Web<br />Developer</h1>
                                            <Link to="/Contact"><h1 className=' text-[#2997FF] hover:text-[#92979a] text-sm sm:text-base lg:text-lg xl:text-xl duration-500'>{"<"}Collaborate{"/>"}</h1></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#111111] rounded-xl outline outline-offset-2 outline-1 relative outline-[#292929] xl:p-4 lg:p-0 p-2 ">
                                    <div className=' p-6 lg:p-7 xl:p-9'>
                                        <div className=' text-center justify-center items-center grid grid-cols-1 gap-4 lg:gap-5 xl:gap-6' >
                                            <h1 className=' my-auto text-xl xl:text-2xl'>A.I ChatBot<br />Developer</h1>
                                            <Link to="/Contact" className='text-[#2997FF] hover:text-[#92979a] text-sm sm:text-base lg:text-lg xl:text-xl duration-500'><h1>Get in touch</h1></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#111111] rounded-xl outline outline-offset-2 outline-1 relative outline-[#292929] xl:p-4 lg:p-0 p-2 hover:shadow-lg hover:shadow-[#2997FF] hover:rounded-sm duration-700">
                                    <div className=' p-6 lg:p-7 xl:p-9'>
                                        <Link to="/Resume" className=' text-center justify-center items-center grid grid-cols-1 gap-4 lg:gap-5 xl:gap-6'>
                                            <h1 className='m-auto h-full text-4xl lg:text-5xl xl:text-6xl'><IoNewspaperOutline /></h1>
                                            <h1 className='text-xl xl:text-2xl'>Resume</h1>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#111111] rounded-xl outline outline-offset-2 outline-1 outline-[#292929] xl:p-4 lg:p-0 p-2 text-center relative ">
                            <div className='text-center justify-center items-center grid grid-cols-1 gap-8 md:gap-10 xl:gap-14 py-9 xl:py-14'>
                                <div className='text-center justify-center items-center grid grid-cols-1 gap-2 xl:gap-4'>
                                    <h1 className=' xl:text-4xl lg:text-3xl sm:text-2xl '>Expertise</h1>
                                    <Link to="/Skills"><h2 className=' w-auto text-lg md:text-xl xl:text-2xl text-[#2997FF] hover:text-[#92979a] duration-500' >{"{"}Skills{"}"}</h2></Link>
                                </div>
                                <div className='overflow-hidden relative h-full text-[#b1b7b9] '>
                                    <Marquee direction='left' autoFill="true" className=''>
                                        <div className=' text-lg xl:text-xl grid grid-cols-6 gap-3 xl:gap-5 pl-5'>
                                            <Skills />
                                        </div>
                                    </Marquee>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#111111] rounded-xl outline outline-offset-2 outline-1 outline-[#292929] p-4">Box 3</div>

                        <div className="bg-[#111111] rounded-xl outline outline-offset-2 outline-1 outline-[#292929] p-4 text-center justify-center items-center">
                            <h1 className='xl:text-4xl lg:text-3xl md:text-2xl xl:pt-16 md:pt-12 xl:pb-10 md:pb-9'>Quote</h1>
                            <div className=' md:pb-12 xl:pb-16 '>
                                <div className=' h-24 md:h-28  xl:h-36 pb-10 md:text-xl xl:text-2xl text-[#92979a]'>
                                    <Quote />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}

export default Home