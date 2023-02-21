import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useTheme } from "next-themes"
import { SunIcon } from "@heroicons/react/solid";
import { MoonIcon } from "@heroicons/react/solid";
import Button from "@mui/material/Button"
import { Typography } from '@mui/material';

const Navbar = () => {

  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();


  useEffect(() => {
    setMounted(true)
  }, []);


  useEffect(() => {
    if (
      router.asPath === '/property' ||
      router.asPath === '/crypto' ||
      router.asPath === '/netflix' ||
      router.asPath === '/twitch'
    ) {
      setLinkColor('#ecf0f3');
    } else {
      setLinkColor('#1f2937');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className='font-normal'>
      <div

        className={
          shadow
            ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
            : 'fixed w-full h-20 z-[100]'
        }
      >

        <div className='flex justify-between items-center w-full h-full px-1 2xl:px-14 dark:bg-[#000] bg-[#008f39] top-0 left-0 pb-4'>
          <div className=' hidden md:flex mt-5'>
            <Link href='/' legacyBehavior>
              <a>
                <Typography className='text-white font-bold'>
                  DANIEL HUGO LOPEZ
                </Typography>
              </a>
            </Link>
          </div>
          <div className='md:flex'>
            <ul style={{ color: `${linkColor}` }} className='hidden md:flex mt-5 font-bold'>
              <li className='ml-10 text-sm uppercase hover:border-b hover:border-b-cyan-400 dark:hover:border-b-[#BB86FC] text-white'>
                <Link href='/'>Datos personales</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b  hover:border-b-cyan-400 dark:hover:border-b-[#BB86FC] text-white'>
                <Link href='/#about'>Experiencia</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b  hover:border-b-cyan-400 dark:hover:border-b-[#BB86FC] text-white'>
                <Link href='/#skills'>Trayectoria</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b  hover:border-b-cyan-400 dark:hover:border-b-[#BB86FC] text-white'>
                <Link href='/#projects'>Diplomas</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b  hover:border-b-cyan-400 dark:hover:border-b-[#BB86FC]  text-white '>
                <Link href='/#contact'>Cursos</Link>
              </li>
            </ul>

            {/* Mobile */}
            <div
              style={{ color: `${linkColor}` }}
              onClick={handleNav}
              className='md:hidden'
            >
              {/* {renderThemeChanger()}   */}
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        <div
          className={
            nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ' : ''
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 dark:bg-[#121212]'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
          >
            <div>
              <div className='flex w-full items-center justify-between '>
                <Link href='/' legacyBehavior>
                  <a>
                    <Image
                      // src="/../public/assets/grpurple.png"
                      width='87'
                      height='35'
                      alt='/'
                    />
                  </a>
                </Link>
                <div
                  onClick={handleNav}
                  className='rounded-full p-3 cursor-pointer'
                >

                  <AiOutlineClose className='dark:bg-["#121212"]' />
                </div>

              </div>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='uppercase'>
                <Link href='/'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm dark:text-white'>
                    Datos Personales
                  </li>
                </Link>
                <Link href='/#about'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm dark:text-white'>
                    Experiencia
                  </li>
                </Link>
                <Link href='/#skills'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm dark:text-white'>
                    Trayectoria
                  </li>
                </Link>
                <Link href='/#projects'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm dark:text-white'>
                    Diplomas
                  </li>
                </Link>
                <Link href='/#main'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm dark:text-white'>
                    Fotos
                  </li>
                </Link>
              </ul>
              <div className='pt-40'>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <a
                    href='https://www.linkedin.com/in/clint-briley-50056920a/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaLinkedinIn className='dark:shadow-gray-50' />
                    </div>
                  </a>
                  <a
                    href='https://github.com/fireclint'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaGithub className='dark:shadow-gray-50' />
                    </div>
                  </a>
                  <Link href='/#contact'>
                    <div
                      onClick={() => setNav(!nav)}
                      className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                    >
                      <AiOutlineMail className='dark:shadow-gray-50' />
                    </div>
                  </Link>
                  <Link href='/resume'>
                    <div
                      onClick={() => setNav(!nav)}
                      className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                    >
                      <BsFillPersonLinesFill className='dark:shadow-gray-50' />
                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;