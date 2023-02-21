import React from 'react'
import BiFootball from "react-icons/bi"

const Footer = () => {
    return (
        <footer className="fixed left-0 bottom-0 w-full p-4 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-white">© 2023 <a href="https://flowbite.com/" className="hover:underline">Daniel Hugo Lopez</a>
            </span>
            {/* <div>
                <ul className='flex justify-center items-center content-center align-middle'>
                   <a><BiFootball/></a>
                </ul>
            </div> */}
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-white sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>

    )
}

export default Footer