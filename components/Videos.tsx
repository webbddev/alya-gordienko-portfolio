import { videos } from "@/data"; // Ensure this path is correct
import Link from "next/link";
import Image from 'next/image';

export default function Videos() {
  return (
    <section className='md:w-3/5 mx-auto px-6 md:px-0 pb-20'>
      <h2 className='text-xl pt-10 font-semibold'>Videos</h2>
      {videos.map((video) => (
        <Link key={video.title} href={video.url} passHref>
          <div className='my-4 cursor-pointer'>
            <div className='md:flex md:gap-x-10 items-center border rounded-2xl p-4 bg-white'>
              {/* left side - video image */}
              <Image
                src={video.image}
                alt={video.title}
                width={1000}
                height={1000}
                className='rounded-md w-full md:w-1/5'
              />
              {/* right side - title, description, tech images */}
              <div className='flex flex-col space-y-2'>
                <h2 className='text-md font-semibold mt-4 md:mt-0'>
                  {video.title}
                </h2>
                <p className='text-muted-foreground text-sm'>
                  {video.description}
                </p>
                {/* technology image */}
                <div className='flex items-center gap-x-2'>
                  {video.technologies.map((technology) => (
                    <div key={technology.title} className='flex'>
                      <Image
                        src={technology.image}
                        alt={technology.title}
                        width={32} // Adjust width to fit the design better
                        height={32} // Adjust height to fit the design better
                        className='w-8'
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  )
}
