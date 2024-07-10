import Intro from '@/components/Intro';
import Videos from '@/components/Videos';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <main className='w-full mx-auto overflow-hidden'>
      <Intro />
      <Videos />
      <Projects />
      <Experience />
    </main>
  );
}
