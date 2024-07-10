'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Typewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { InlineWidget } from 'react-calendly';
import { LinkPreview } from '@/components/ui/link-preview';
import { PiDiscordLogoFill } from 'react-icons/pi';
import { RiPagesLine } from 'react-icons/ri';
import Link from 'next/link';
import { videos } from '@/data';

export default function Intro() {
  const [shouldShowContent, setShouldShowContent] = useState(false);

  useEffect(() => {
    setShouldShowContent(true);
  }, []);

  return (
    <div>
      <section className='md:w-3/5 mx-auto px-6 md:px-0 pb-20'>
        <div className='flex justify-end items-center pt-10 md:hidden underline'>
          <Dialog>
            <DialogTrigger>Contact</DialogTrigger>
            <DialogContent>
              <InlineWidget url='https://calendly.com/nikolay-tetradov/introductory-meeting' />
            </DialogContent>
          </Dialog>
        </div>

        <div className='flex flex-col justify-center items-center md:flex-row md:gap-x-10 md:pt-28'>
          <Image
            src='/images/alya-resized.png'
            alt='Alya'
            width={1000}
            height={1000}
            quality={80}
            className='rounded-xl w-48 mt-4 md:w-60 lg:w-72 xl:w-80'
          />
          <div className='space-y-2'>
            <div className='text-4xl my-4'>🖐🏻</div>
            <h1 className='text-xl lg:text-4xl font-semibold'>
              <Typewriter
                words={[
                  "Hi, I'm Alya",
                  '', // This is to create a pause before erasing
                  "Hi, I'm sexy Alya! A successful journalist who has channeled her inquisitive mind into becoming an SEO detective. I am based in Kishinev, Moldova.",
                ]}
                loop={1}
                cursor
                cursorBlinking={true}
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={500}
              />
            </h1>

            <AnimatePresence>
              {shouldShowContent && (
                <motion.div
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 1, delay: 14 }}
                >
                  <p className='text-muted-foreground text-lg md:pr-8'>
                    I have a{' '}
                    <LinkPreview
                      url='https://birdigi.vercel.app/'
                      className='font-bold text-teal-500 underline'
                    >
                      <RiPagesLine className='h-6 w-6 inline text-red-500' />
                      <span className='ml-1'>SEO dedicated web page</span>
                    </LinkPreview>{' '}
                    where I share my knowledge and experience with the
                    community.
                  </p>

                  <p className='text-muted-foreground text-lg '>
                    Feel free to reach out to me on{' '}
                    <LinkPreview
                      url='https://discord.gg/fmejGx8QfK'
                      className='font-bold'
                    >
                      <PiDiscordLogoFill className='h-6 w-6 inline text-indigo-500' />{' '}
                      <span className='text-indigo-500 underline'>Discord</span>
                    </LinkPreview>{' '}
                    I am always happy to help.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
