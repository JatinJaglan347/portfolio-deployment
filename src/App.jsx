import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import CustomScrollbar from './components/CustomScrollbar';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className=' bg-[#161616] w-full h-full md:flex'>
        <div className="App ">
          <CustomScrollbar />
        </div>
        <div className=''>
          <Navbar />
        </div>

        <main>
          <div className=' md:w-full md:pl-[20%]'>
            <div className=' p-12'>
              <section>
                <Header />
              </section>

              <section>
                <Home />
              </section>

              {/* <section>
                <GithubRepo />
              </section> */}

              <section>
                <Footer />
              </section>

            </div>
          </div>
        </main>

        
      </div>
    </>
  );
}

export default App;






















































// import { useState } from 'react'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className=' bg-[#161616] w-full h-full'>
//         <nav>
//           <div className='w-full h-auto '>
//             <div className='flex justify-between items-center px-6'>
//               <div className=' flex items-center'>
//               <div className=" p-3">
//                 <img className='rounded-full w-10 h-10' src="https://media.licdn.com/dms/image/D5603AQHhClaJtvfY3Q/profile-displayphoto-shrink_400_400/0/1692246491907?e=1712188800&v=beta&t=aWcjzHTNh7w_O5r5JEqLtBHGBn7EYXs06uu3FUWe3iI" alt="" />
//               </div>
//               <div className=" text-white text-xl">
//                 <h1>Jatin Jaglan</h1>
//               </div>
//               </div>
//               <div className='text-white text-2xl'>
//                 <ion-icon onclick="onToggleMenu(this)" name="options-outline"></ion-icon>
//               </div>
//               <div className=" nav-links flex flex-col justify-center items-center text-center space-y-3 absolute py-6 bg-white w-full top-[-100%] md:flex-row md:bg-[#222428] md:text-white md:top-0 md:py-2 md:items-end md:space-x-9 md:w-auto md:relative">
//                 <ul className="flex flex-col justify-center space-y-3 md:flex-row md:items-center md:space-x-9 md:space-y-0">
//                   <a href="#"><li>Home</li></a>
//                   <a href="#"><li>Products</li></a>
//                   <a href="#"><li>Tech</li></a>
//                   <a href="#"><li>Developers</li></a>
//                   <a href="#"><li>Blog</li></a>
//                   <a href="#"><li>Pricing</li></a>
//                   <a href="#"><li>Global</li></a>
//                 </ul>
//                 <div>
//                   <button className="px-3 py-1 text-black bg-white rounded">Signup</button>
//                 </div>
//               </div>

//             </div>
//             <div className=''>

//             </div>
//           </div>
//         </nav>
//         <div className=''> </div>
//       </div>
//     </>
//   )
// }

// export default App





