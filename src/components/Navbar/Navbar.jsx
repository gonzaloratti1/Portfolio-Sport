import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useTheme } from "next-themes"
import { Typography } from '@mui/material';
import { GiSoccerBall } from "react-icons/gi"
import { BiFootball } from "react-icons/bi"
import ListadoCursos from '<prefi>/pages/ListadoCursos';
import hugofoto from "../../assets/FotosJugador/FotoHugo02.jpg"
const Navbar = () => {

  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [linkColor, setLinkColor] = useState('#1f2937');



  useEffect(() => {
    setMounted(true)
  }, []);




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
            ? 'fixed w-full h-14 shadow-xl z-[100] ease-in-out duration-300'
            : 'fixed w-full h-14 z-[100]'
        }
      >

        <div className='flex justify-between items-center w-full h-full px-1 2xl:px-14 dark:bg-[#000] bg-[#008f39] top-0 left-0 pb-4'>
          <div className='hidden md:flex mt-5'>
            <Link href='/' legacyBehavior>
              <a>
                <Typography className='text-white font-bold'>
                  DANIEL HUGO LOPEZ
                </Typography>
              </a>
            </Link>
          </div>


          <div className="mx-auto w-1/2">
            <Link href='/' legacyBehavior>
              <ul className="flex justify-end items-center px-36 mr-10 bg-transparent">
                <li><BiFootball className="text-white rounded-3xl border-y-2 mt-5" size={50} /></li>
              </ul>
            </Link>
          </div>




          <div className='md:flex'>
            <ul className='hidden md:flex mt-5 font-bold'>

              <li className='ml-10 text-sm uppercase hover:border-b hover:border-b-cyan-400  text-white'>
                <Link href='/'>Datos personales</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b  hover:border-b-cyan-400  text-white'>
                <Link href='/#experiencia'>Experiencia</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b  hover:border-b-cyan-400 text-white'>
                <Link href='/#trayectoria'>Trayectoria</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b  hover:border-b-cyan-400  text-white'>
                <Link href='/FotosMain'>Fotos</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b  hover:border-b-cyan-400  text-white '>
                <Link href="/ListadoCursos">Cursos</Link>
              </li>
            </ul>

            {/* Mobile */}
            <div
              style={{ color: 'white' }}
              onClick={handleNav}
              className='md:hidden px-4 py-3'
            >
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
              <div className='flex w-full items-center justify-between py-2'>
                <div
                  onClick={handleNav}
                  className='rounded-full py-3 px-3 cursor-pointer'
                  style={{ color: 'white' }}
                >

                  <AiOutlineClose className='bg-["#0000"]' />
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
                <Link href='/#experiencia'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm dark:text-white'>
                    Experiencia
                  </li>
                </Link>
                <Link href='/#trayectoria'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm dark:text-white'>
                    Trayectoria
                  </li>
                </Link>
                <Link href="/ListadoCursos">
                  <li onClick={() => setNav(false)} className='py-4 text-sm dark:text-white'>
                    Diplomas
                  </li>
                </Link>
                <Link href='/FotosMain'>
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
                    <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaInstagram className='dark:shadow-gray-50' color='white' />
                    </div>
                  </a>
                  <a
                    href='https://github.com/fireclint'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaWhatsapp className='dark:shadow-gray-50' color='white' />
                    </div>
                  </a>
                  <Link href='/#contact'>
                    <div
                      onClick={() => setNav(!nav)}
                      className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                    >
                      <AiOutlineMail className='dark:shadow-gray-50' color='white' />
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