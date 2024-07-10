import { projects } from "@/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section className='md:w-3/5 mx-auto px-6 md:px-0 pb-20'>
      <h2 className='text-xl pt-10 font-semibold'>Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 md:w-full gap-4 mt-5 sm:w-9/10 w-full '>
        {projects.map((project) => (
          <div key={project.title} className='border rounded-xl p-4 bg-white'>
            <div className='md:flex items-center justify-between'>
              <div className='md:flex items-center gap-x-4'>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={100}
                  height={100}
                  className='rounded-md w-16 h-16'
                />

                <div className='flex flex-col '>
                  <h2 className='text-md font-semibold '>{project.title}</h2>
                  <p className='text-muted-foreground text-sm'>
                    {project.description}
                  </p>
                </div>
              </div>
              <p className='text-muted-foreground text-sm mt-2 md:mt-0'>
                {project.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
