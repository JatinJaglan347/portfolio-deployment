import React from 'react'
import { FaImage } from "react-icons/fa6";

function Skeltongithubrepo() {
  return (
    <>
          <div className=' grid gap-5 min-w-full relative '>
              <div className=' grid md:grid-cols-2 grid-cols-1 animate-pulse gap-5 xl:grid-cols-3 bg-[#111111] rounded-xl outline outline-offset-2 outline-1 outline-[#292929] h-auto p-4'>
                  <div className="flex items-center justify-center text-center bg-gray-300 rounded-full dark:bg-gray-700 w-36 h-36 m-auto ">
                      <div><FaImage /></div>
                  </div>
                  <div className=' grid-cols-1 lg:col-span-2 grid md:grid-cols-2'>
                      <div className=' grid gap-px'>
                          <div className=''>
                              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[40%] mb-4"></div>
                              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[40%] mb-4"></div>
                          </div>
                          <div className='grid gap-px'>
                              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[60%] mb-2.5"></div>
                              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[60%] mb-2.5"></div>
                              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[60%] mb-2.5"></div>
                          </div>
                      </div>
                      <div className=' grid gap-px'>
                          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[60%] mb-2.5"></div>
                          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[60%] mb-2.5"></div>
                          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[60%] mb-2.5"></div>
                          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[60%] mb-2.5"></div>
                          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[60%] mb-2.5"></div>
                      </div>
                  </div>
              </div>

            <div className=' grid grid-cols-1 bg-[#111111] rounded-xl outline outline-offset-2 outline-1  outline-[#292929]  p-4'>
                
                <div role="status" className=" p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                            <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mt-2"></div>
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mt-2"></div>
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mt-2"></div>
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mt-2"></div>
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mt-2"></div>Name
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>

            </div>
      </div>  
    </>
  )
}

export default Skeltongithubrepo