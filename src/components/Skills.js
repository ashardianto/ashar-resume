import html from '../images/logo/html.png'
import css from '../images/logo/css.png'
import js from '../images/logo/js.png'
import express from '../images/logo/express.png'
import git from '../images/logo/git.png'
import mongodb from '../images/logo/mongodb.png'
import node from '../images/logo/node.png'
import postgres from '../images/logo/postgres.png'
import reactimage from '../images/logo/react.png'
import redux from '../images/logo/redux.png'
import firebase from '../images/logo/firebase.png'
import next from '../images/logo/next.png'
import tailwind from '../images/logo/tailwind.png'
import bootstrap from '../images/logo/bootstrap.svg'
import swagger from '../images/logo/swagger.svg'

const Skills = () => {

  const skillList = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-600'
    },
    {
      id: 3,
      src: js,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactimage,
      title: 'React.js',
      style: 'shadow-blue-400'
    },
    {
      id: 5,
      src: next,
      title: 'Next.js',
      style: 'shadow-gray-500'
    },
    {
      id: 6,
      src: redux,
      title: 'Redux',
      style: 'shadow-purple-400'
    },
    {
      id: 7,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-purple-600'
    },
    {
      id: 8,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-teal-500'
    },
    {
      id: 9,
      src: express,
      title: 'Express.js',
      style: 'shadow-yellow-600'
    },
    {
      id: 10,
      src: mongodb,
      title: 'MongoDB',
      style: 'shadow-green-500'
    },
    {
      id: 11,
      src: postgres,
      title: 'PostgreSQL',
      style: 'shadow-blue-600'
    },
    {
      id: 12,
      src: firebase,
      title: 'Firebase',
      style: 'shadow-orange-600'
    },
    {
      id: 13,
      src: git,
      title: 'GIT',
      style: 'shadow-gray-500'
    },
    {
      id: 14,
      src: node,
      title: 'Node.js',
      style: 'shadow-green-700'
    },
    {
      id: 15,
      src: swagger,
      title: 'Swagger',
      style: 'shadow-green-500'
    }
  ]

  return (
    <div name='skills' className='w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-8 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-5xl text-red font-bold border-b-4 inline'>Skills</p>
          <p className='py-6 text-cream font-medium'>Tools and languages I've worked with</p>
        </div>
        <div className='w-full sm:w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

          {
            skillList.map(({ id, src, title, style }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}>
                <img src={src} alt='html' className='w-20 md:w-20 sm:w-10 mx-auto' />
                <p className='mt-4 font-medium'>{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Skills
