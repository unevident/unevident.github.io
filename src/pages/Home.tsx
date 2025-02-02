// import { useState } from "react"
import projectsjson from "../projects/projects.json"
import skillsetjson from "../projects/skillset.json"
// import { listPosts } from "../Components/list_posts"
// import { project } from "../Components/project"

export function Home() {
    // const [count, setCount] = useState(0)
  
    return (
      <div>
  
        <div>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta charSet='utf-8' />
        </div>
  
        <div className='min-h-screen md:flex md:items-start font-sans text-gray-50 bg-gradient-to-br mx-auto p-10 from-oxford-blue to-rich-black'>
          <section id='information' className='lg:w-1/5 mr-10'>
            <h1 className='text-6xl text-orange-400'>Linus Lee</h1>
            <h2 className='text-2xl text-gray-300'>Student at National University of Singapore</h2>
            <p className='text-base'>I am currently studying a bachelor's in Psychology at the National University of Singapore, with a second major in Data Science.</p>
            <footer className="flex mt-5">
              <a title="github" className="mr-2 hover:scale-125 transform transition" href="https://github.com/unevident">
                <img className="hover:scale-125 transform transition" src="/github-icon.png"></img>
              </a>
              <a title="linkedin" className="mr-2 hover:scale-125 transform transition" href="https://linkedin.com/in/linus-lee-jing-wo">
                <img className="hover:scale-125 transform transition" src="/linkedin-icon-new2.png"></img>
              </a>
            </footer>
          </section>


          <section id='sections' className='p-2 flex-grow'>
            <section id='posts' className='pb-6'>
              <h2 className='text-3xl m-2'>Posts</h2>
              
            </section>
  
            <section id='projects' className="text-xl flex flex-col mb-3 w-4/5">
              <h2 className='text-3xl m-2'>Projects</h2>
                {projectsjson.projects.map((project) => (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div key={project.name} className='group relative overflow-hidden grid grid-cols-1 grid-flow-row-dense gap-2 border-2 p-2 rounded transition hover:scale-103 duration-700 ease-in-out'>
                      <span>
                        <h3 className='text-2xl' >{project.name}</h3>
                        <h4>{project.tags}</h4>
                        <p>{project.description}</p>
                      </span>
                      <span className="ease-in-out absolute left-[600px] -mt-[1600px] h-[2000px] w-16 rotate-[1.25rad] transform bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.40)_0%,rgba(255,255,255,0.00)_100%)] transition duration-700 group-hover:translate-y-[800px]"></span>
                    </div>
                    
                  </a>
                ))}
  
            </section> 
            <br>
            </br>
            <section id='skills' className='mb-3 w-4/5 col-auto'>
              <h2 className='text-3xl m-2 grid grid-flow-row-dense'>Skillset</h2>
              {skillsetjson.skills.map((skill) => (
                <div key={skill.name} className='ease-in group flex gap-2 border-2 w-1/6 p-2 m-2 rounded-md content-center justify-center hover:animate-jiggle-div hover:bg-orange-400 hover:text-oxford-blue duration-100 '>
                  <span>
                    <h3 className="text-2xl">{skill.name}</h3>

                  </span>
                </div>
              ))}
            </section>
            {/* <button className='bg-blue-400 hover:bg-blue-700 border-zinc-950 size-40 rounded-full' onClick={() => setCount(count+1)}>
              count {count}
            </button> */}
            
          </section>
        </div>
      </div>
  
    )
  }
  