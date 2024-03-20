import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaFigma, FaGithub, FaPython, FaJava } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { SiDjango, SiTailwindcss, SiCanva, SiCplusplus, SiCloudera, SiZapier } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IoMdGitMerge } from "react-icons/io";
import { GrMysql } from "react-icons/gr";

export const skills =[
    {   
        id: 'react',
        icon: <FaReact />,
        iconName: "React"
    },
    {
        id: 'vite',
        icon: <TbBrandVite />,
        iconName: "Vite"
    },
    {
        id: 'tailwind',
        icon: <SiTailwindcss />,
        iconName: "Tailwind"
    },
    {
        id: 'django',
        icon: <SiDjango />,
        iconName: "Django"
    },
    {
        id: 'javascript',
        icon: <IoLogoJavascript />,
        iconName: "Javascript"
    },
    {
        id: 'html5',
        icon: <FaHtml5 />,
        iconName: "HTML5"
    },
    {
        id: 'css3',
        icon: <FaCss3Alt />,
        iconName: "CSS3"
    },
    {
        id: 'bootstrap',
        icon: <FaBootstrap />,
        iconName: "Bootstrap"
    },
    {
        id: 'figma',
        icon: <FaFigma />,
        iconName: "Figma"
    },
    {
        id: 'canva',
        icon: <SiCanva />,
        iconName: "Canva"
    },
    {
        id: 'github',
        icon: <FaGithub />,
        iconName: "GitHub"
    },
    {
        id: 'git',
        icon: <IoMdGitMerge />,
        iconName: "Git"
    },
    {
        id: 'cplusplus',
        icon: <SiCplusplus />,
        iconName: "C++"
    },
    {
        id: 'c',
        icon: <SiCloudera />,
        iconName: "C"
    },
    {
        id: 'python',
        icon: <FaPython />,
        iconName: "Python"
    },
    {
        id: 'java',
        icon: <FaJava />,
        iconName: "Java"
    },
    {
        id: 'mysql',
        icon: <GrMysql />,
        iconName: "MySql"
    },
    {
        id:'zapier',
        icon:<SiZapier />,
        iconName:"Zapier"
    },
    
];

const Skills = () => {
return (
    <>
        
            {skills.map((skill, index) => (
                <a key={index} href="#" className=' flex text-center items-center justify-center font-semibold gap-x-1 px-1  rounded bg-[#161616] p-2'>
                    {skill.icon} {skill.iconName}
                </a>  
            ))}
    </>
  )
}

export default Skills;



