import { experience } from '@/data';
import Image from 'next/image';

export default function Experience() {
  return (
    <section className='md:w-3/5 mx-auto px-6 md:px-0 pb-20'>
      <h2 className='text-xl pt-10 font-semibold'>Experience</h2>
      {experience.map((item) => (
        <div key={item.title} className='my-4'>
          <div className='md:flex justify-between cursor-pointer items-center border rounded-2xl p-4 bg-white'>
            <div className='flex items-center gap-x-4'>
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className='
                   rounded-md
                     w-20
                      p-2
              '
              />

              <div className=''>
                <h2 className='te  xt-md font-semibold mt-4 md:mt-0'>
                  {item.title}
                </h2>
                <p className='text-muted-foreground '>{item.description}</p>
              </div>
            </div>

            <div>
              <div className='text-muted-foreground text-sm mt-4 md:mt-0'>
                {' '}
                {item.date}{' '}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
