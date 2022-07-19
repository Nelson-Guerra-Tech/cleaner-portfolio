import { FaReact } from 'react-icons/fa'
import styled from 'styled-components'
import {
  SiFirebase,
  SiNetlify,
  SiCss3,
  SiTesla,
  SiHtml5,
  SiJavascript,
  SiMaterialui,
  SiGit,
  SiTailwindcss,
} from 'react-icons/si'

const reactIcon = <FaReact className='project-icon react rotate' />
const firebaseIcon = <SiFirebase className='project-icon firebase' />
const netlifyIcon = <SiNetlify className='project-icon netlify' />
const cssIcon = <SiCss3 className='project-icon css' />
const htmlIcon = <SiHtml5 className='project-icon html' />
const javascriptIcon = <SiJavascript className='project-icon javascript' />
const tailwindtIcon = <SiTailwindcss className='project-icon tailwind' />
const materialIcon = <SiMaterialui className='project-icon material-ui' />
const gitIcon = <SiGit className='project-icon git' />

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'NG.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Nelson Guerra',
  role: 'Front End Developer',
  description: `An Army Veteran & Web Developer with a passion for
              technology. Based out of Georgia 🌎 I consider myself a 'forever student' eager to both
              build on my academic foundations in web development & Focused on designing & programming front-end applications.`,
  resume: 'https://1drv.ms/b/s!ArPqeXXG-P85f8KkvguCJ7r_LZY',
  social: {
    linkedin: 'https://www.linkedin.com/in/nelson-guerra-7075b413a/',
    github: 'https://github.com/Nelson-Guerra-Tech',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    image:
      'https://github.com/Nelson-Guerra-Tech/wordle-clone/raw/main/public/social-image.png',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', reactIcon],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    image:
      'https://github.com/Nelson-Guerra-Tech/wordle-clone/raw/main/public/social-image.png',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', reactIcon, ' | '],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    image:
      'https://github.com/Nelson-Guerra-Tech/wordle-clone/raw/main/public/social-image.png',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', reactIcon],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    image:
      'https://github.com/Nelson-Guerra-Tech/wordle-clone/raw/main/public/social-image.png',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', reactIcon],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    image:
      'https://github.com/Nelson-Guerra-Tech/wordle-clone/raw/main/public/social-image.png',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', reactIcon],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    image:
      'https://github.com/Nelson-Guerra-Tech/wordle-clone/raw/main/public/social-image.png',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', reactIcon],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {
    icon: htmlIcon,
    space: ' - ',
    name: 'HTML',
  },
  {
    icon: cssIcon,
    space: ' - ',
    name: 'CSS',
  },
  {
    icon: javascriptIcon,
    space: ' - ',
    name: 'JavaScript',
  },
  {
    icon: reactIcon,
    space: ' - ',
    name: 'React',
  },
  {
    icon: tailwindtIcon,
    space: ' - ',
    name: 'Tailwind CSS',
  },
  {
    icon: materialIcon,
    space: ' - ',
    name: 'Material UI',
  },
  {
    icon: gitIcon,
    space: ' - ',
    name: 'Git',
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nelsonguerra.tech@outlook.com',
}

export { header, about, projects, skills, contact }
