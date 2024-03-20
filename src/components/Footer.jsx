import React, { Component } from 'react'
import { Link , NavLink} from 'react-router-dom'

export class Footer extends Component {
    static propTypes = {}

    render() {
        return (
            <>
                <section>
                    <footer className=' '>
                        <div className=' flex justify-center items-center text-center pt-12 md:pt-16 xl:pt-20 text-base md:text-lg xl:text-xl'>
                            <div className='text-white grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-10'>
                                <a href="https://www.linkedin.com/in/jatin-jaglan-830853263/" target="_blank" ><h1 className='hover:underline-offset-2 hover:underline hover:text-[#2997FF] duration-700 '>Linkedin</h1></a>
                                <a href="https://twitter.com/Jatin_Jaglan347" target="_blank" ><h1 className='hover:underline-offset-2 hover:underline hover:text-[#2997FF] duration-700'>Twitter | X</h1></a>
                                <a href="https://www.instagram.com/jatinjaglan347/" target="_blank" ><h1 className='hover:underline-offset-2 hover:underline hover:text-[#2997FF] duration-700'>Instagram </h1></a>
                                <a href="mailto:jatinjaglan347@gmail.com"><h1 className='hover:underline-offset-2 hover:underline hover:text-[#2997FF] duration-700'>Email </h1></a>
                            </div>
                        </div>
                    </footer>
                </section>
            </>

        )
    }
}

export default Footer