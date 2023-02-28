import React from 'react'
import { BiFootball } from "react-icons/bi"
import {AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai"
import {GrMail} from "react-icons/gr"

const Footer = () => {
    return (
        <footer className="bg-black text-white py-3 w-full h-full  dark:bg-[#000] 2xl:px-10">
            <div className="flex">
                <div className="container flex items-start justify-start">
                    {/* <span className="text-white font-semibold text-lg px-2">Open to work</span> */}
                    <div className='px-1'>
                        <BiFootball color='white' size={25}/>
                    </div>
                     <span className="text-white font-semibold text-base px-2 uppercase">Entrenador de futbol</span>
                </div>

                <div className='container flex items-end justify-end'>
                    <ul className="flex pt-2">
                        <li className="px-3  cursor-pointer"><AiOutlineInstagram size={18}/></li>
                        <li className="px-3  cursor-pointer"><AiOutlineWhatsApp size={18}/></li>
                        <li className="px-3 cursor-pointer"><GrMail size={18}/></li>
                    </ul>
                </div>
            </div>

        </footer>

    )
}

export default Footer