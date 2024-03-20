import React from 'react';
import { skills } from './Skills';

function SpeSkills() {

  const idsFrontend = ["react", "vite", "javaScript", "html5", "css3", "bootstrap", "tailwind"];
  const idsBackend = ["django"];
  const idsDesign = ["figma", "canva"];
  const idsProgramming = ["cplusplus", "c", "python", "java"];
  const idsCollaboration = ["github", "git"];
  const idsDatabase = ["mysql"];
  const idsAutomation = ["zapier"];
  
  const frontendSkills = skills.filter(skill => idsFrontend.includes(skill.id));
  const backendSkills = skills.filter(skill => idsBackend.includes(skill.id));
  const designSkills = skills.filter(skill => idsDesign.includes(skill.id));
  const programmingSkills = skills.filter(skill => idsProgramming.includes(skill.id));
  const collaborationSkills = skills.filter(skill => idsCollaboration.includes(skill.id));
  const databaseSkills = skills.filter(skill => idsDatabase.includes(skill.id));
  const automationSkills = skills.filter(skill => idsAutomation.includes(skill.id));

  const skillSet = [
    {
      title: "Frontend",
      skillItems: frontendSkills
    },
    {
      title: "Backend",
      skillItems: backendSkills
    },
    {
      title: "Design",
      skillItems: designSkills
    },
    {
      title: "Programming",
      skillItems: programmingSkills
    },
    {
      title: "Collaboration",
      skillItems: collaborationSkills
    },
    {
      title: "Database",
      skillItems: databaseSkills
    },
    {
      title: "Automation",
      skillItems: automationSkills
    }
  ];

  return (
    <>
    <section className='bg-[#161616]'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
      {skillSet.map((skillGroup, index) => (
        <div className="bg-[#111111] rounded-xl outline outline-offset-2 outline-1 outline-[#292929] p-4 ">
          <div key={index} >
            <div className='grid gap-4' >
                <div className='grid text-2xl justify-center items-center text-center'>
                  <h1>{skillGroup.title}</h1>
                </div>
                <div className='p-2 space-y-4 bg-[#161616] border border-gray-200 divide-gray-200 rounded shadow dark:divide-gray-700 md:p-4 dark:border-gray-700'>
                  {skillGroup.skillItems.map((skill, i) => (
                    <div key={i} className='flex text-center items-center justify-center font-semibold rounded bg-[#161616]'>
                      {skill.icon} {skill.iconName}
                    </div>
                  ))}
                </div>
            </div>
          </div>          
        </div>
      ))}
      </div>
    </section>
    </>
  );
}

export default SpeSkills;
