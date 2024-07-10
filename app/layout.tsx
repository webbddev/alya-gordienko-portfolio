import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const font = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '👩🏼‍💻 Alya | SEO Detective',
  description: "Alya's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* <body
        className={`${font.className} `}
      > */}
      <body
        className={`${font.className} relative inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]`}
      >
        <div className='absolute left-0 right-0 top-0 -z-10 mx-auto h-[710px] w-4/5 rounded-full bg-fuchsia-400 opacity-20 blur-[100px]' />
        {children}
      </body>
    </html>
  );
}
