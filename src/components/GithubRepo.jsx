import React, { useState, useEffect } from 'react';
import { FaLink, FaLocationDot, FaCodeFork } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { VscIssues } from "react-icons/vsc";
import LoadingBar from 'react-top-loading-bar';
import Skeltongithubrepo from './SkeletonLoader/Skeltongithubrepo';


const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(); // This will return the date portion in the local date format
};

const GithubRepo = () => {
  const [progress, setProgress] = useState(30);
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const [reposData, setReposData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
      // Fetch repositories
      
      fetch('https://api.github.com/users/jatinjaglan347/repos', {})
          .then(response => response.json())
          .then(data => {
            setRepos(data);
          })

          .catch(error => console.error('Error fetching repositories:', error));

      fetch('https://api.github.com/users/jatinjaglan347', {})
          .then(response => response.json())
          .then(data => { 
            setProfile([data])
          })
          .catch(error => console.error('Error fetching repositories:', error));

  }, []);

  

useEffect(() => {
 setTimeout(() => {
    if (profile.length > 0) {
      setProgress(60);
      setTimeout(() =>{
        if (repos.length > 0) {
            setProgress(100); 
            setDataFetched(true);
          }
        }, 1000 )  
    }
  }, 2000);
  
  }, [profile,repos ]);

  if (!dataFetched) {
    return <Skeltongithubrepo />;
  }

  return (
    <div className=' bg-[#161616] text-white'> 
      <LoadingBar
          color='#2997FF'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
      />
      <div className=' grid gap-5'>
                {profile.map((prof,i) =>(
                  <div key={i} className=' grid md:grid-cols-2 grid-cols-1 gap-5 xl:grid-cols-3 bg-[#111111] rounded-xl outline outline-offset-2 outline-1 relative outline-[#292929] p-4'>
                      <div className=' flex justify-center items-center rounded-full w-auto '>
                          <img className=' rounded-full w-3/5' src={prof.avatar_url} alt="" />
                      </div>
                      <div className=' grid-cols-1 lg:col-span-2 grid md:grid-cols-2'>
                          <div className=' grid gap-px'>
                            <div className=''>
                              <h1 className=' text-2xl md:text-4xl items-center '>{prof.name}</h1>
                              <a className=' flex items-center pt-1 text-lg md:text-xl gap-2  ' href={prof.html_url}><h2 className=' text-[#9BA1A6] hover:text-[#2997FF]'>{prof.login}</h2><h2 className=' text-[#2997FF] hover:text-[#9BA1A6]'><MdArrowOutward /></h2></a>
                            </div>
                            <div className='grid gap-px'>
                              <div className=' flex items-center'><p></p><p>{prof.bio}</p></div>
                              <div className=' flex gap-2 text-sm md:text-lg text-[#9BA1A6] #292929 items-center text-wrap'><p className=''><FaLink /></p><a href={prof.blog}><p>{prof.blog}</p></a></div>
                              <div className=' flex items-center md:text-lg text-sm gap-2 text-[#9BA1A6] '><p className=''><FaLocationDot /></p><p>{prof.location}</p></div>
                            </div>
                          </div>
                          <div className=' grid gap-1'>
                              <div className=' flex gap-2 lg:text-lg items-center'><h1 className=' text-[#9BA1A6]'>Repositories</h1><h1 className=' text-base lg:text-xl'>{prof.public_repos}</h1></div>
                              <div className=' flex gap-2 lg:text-lg items-center'><h2 className=' text-[#9BA1A6]'>Followers</h2><h2 className=' text-base lg:text-xl '>{prof.followers}</h2></div>
                              <div className=' flex gap-2 lg:text-lg items-center'><h2 className=' text-[#9BA1A6]'>Following</h2><h2 className=' text-base lg:text-xl'>{prof.following}</h2></div>
                              <div className=' flex gap-2 items-center'><p className=' text-[#9BA1A6]'>Github User Since</p><p className=''> {formatDate(prof.created_at)}</p></div>
                              <div className=' flex gap-2 items-center'><p className=' text-[#9BA1A6]'>Last Active</p><p className=''>{formatDate(prof.updated_at)}</p></div>
                          </div>
                      </div>
                  </div>
                ))}

                <div className=' grid grid-cols-1 bg-[#111111] rounded-xl outline outline-offset-2 outline-1  outline-[#292929]  p-4'>
                  <div className='p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow dark:divide-gray-700 md:p-6 dark:border-gray-700'>
                    {repos.map((repo,i) => (
                      <div key={i} className='' >
                        <div className=' py-10 grid lg:grid-cols-6 gap-5 '>
                          <div className='md:col-span-5 grid gap-3 text-wrap'>
                            <a className=' flex text-wrap text-xl md:text-3xl hover:text-[#2997FF]' href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                            <p className=' flex text-wrap text-[#d3d7db] text-sm'>{repo.description}</p>
                            <div className=' grid grid-cols-2 lg:grid-cols-4 text-[#9BA1A6]'>
                              <h1>{repo.language}</h1>
                              <h1 className=' flex gap-2 text-xs lg:text-sm xl:text-base'><p>Created:</p><p>{formatDate(repo.created_at)}</p></h1>
                              <h1 className=' flex gap-2 text-xs lg:text-sm xl:text-base'><p>Updated:</p><p>{formatDate(repo.updated_at)}</p></h1>
                              <h1 className=' flex gap-2 text-xs lg:text-sm xl:text-base'><p>Pushed:</p><p>{formatDate(repo.pushed_at)}</p></h1>
                            </div>
                          </div>
                          <div className='flex flex-row lg:flex-col justify-between gap-3 lg:border-l-2 border-[#292929] relative p-5'>
                            <div className='text-xs md:text-sm flex gap-1 lg:gap-2 items-center'>
                              <p><IoMdStarOutline /></p>
                              <p>{repo.stargazers_count}</p>
                              <h1>Stars</h1>
                            </div>
                            <div className='text-xs md:text-sm flex gap-1 lg:gap-2 items-center'>
                              <p><FaCodeFork /></p>
                              <p>{repo.forks}</p>
                              <h1>Fork</h1>
                            </div>
                            <div className='text-xs md:text-sm flex gap-1 lg:gap-2 items-center'>
                              <p><VscIssues /></p>
                              <p>{repo.open_issues}</p>
                              <h1>Issues</h1>
                            </div>
                          </div>
                        </div>

                      </div>
                    ))} 
                  </div> 
                </div>
      </div>      
    </div>
    


  );
};

export default GithubRepo;
