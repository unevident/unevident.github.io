import { useState } from "react"
import projectsjson from "../projects/projects.json"
// import { listPosts } from "../Components/list_posts"
// import { project } from "../Components/project"

export function Home() {
    const [count, setCount] = useState(0)
  
    return (
      <div>
  
        <div>
          <meta name='viewport' content='width=device-width,  initial-scale=1.0' />
          <meta charSet='utf-8' />
        </div>
  
        <div className='min-h-screen md:flex font-sans text-gray-50 bg-gradient-to-br mx-auto p-10 from-oxford-blue to-rich-black'>
          <section id='information' className='w-1/5 mr-10'>
            <h1 className='text-6xl text-orange-400'>Linus Lee</h1>
            <h2 className='text-2xl text-gray-300'>Student at National University of Singapore</h2>
            <p className='text-base'>I am currently studying a bachelor's in Psychology at the National University of Singapore, with a second major in Data Science.</p>
          </section>
          <section id='sections' className='p-2 flex-grow'>
            <section id='posts' className=''>
              <h2 className='text-3xl m-2'>Posts</h2>
              
  
            </section>
  
            <section id='projects' className="text-xl flex-col mb-3 space-y-1 mr-60">
              <h2 className='text-3xl m-2'>Projects</h2>
                {projectsjson.projects.map((project) => (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div key={project.name} className='grid grid-flow-row-dense gap-2 border-2 p-2 rounded transition hover:scale-103 hover:bg-slate-700'>
                    <h3 className='text-2xl' >{project.name}</h3>
                    <h4>{project.tags}</h4>
                    <p>{project.description}</p>
                    </div>
                  </a>
                ))}
  
            </section> 
            <br>
            </br>
            <button className='bg-blue-400 hover:bg-blue-700 border-zinc-950 size-40 rounded-full' onClick={() => setCount(count+1)}>
              count {count}
            </button>
          </section>
        </div>
      </div>
  
    )
  }
  