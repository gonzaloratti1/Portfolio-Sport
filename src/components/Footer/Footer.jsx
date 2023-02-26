import React from 'react'
import BiFootball from "react-icons/bi"

const Footer = () => {
    return (
        <footer class="bg-black text-white px-4 py-2">
            <div class="container mx-auto">
                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/2 lg:w-1/4 mb-4">
                        <span class="text-lg font-bold mb-2">Footer Title</span>

                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/4 mb-4">
                
                        <ul>
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                            <li><a href="#">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer