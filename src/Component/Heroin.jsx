import React from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import images from '../Images/3.jpg';

export default function Heroin(){
    return<section className="flex flex-col md:flex-row px-5 py-32 bg-primary text-white justify-center">
        <div className='md:w-1/2 flex flex-col'>
        <h1 className='text-6xl '>Hi,<br/>I'm Kalpana R 
        <p className="text-2xl">Im a Frontend Developer</p></h1>
        <div className="flex py-10">
        <a href="https://www.instagram.com/kalpana091294" target="_blank" rel="noopener noreferrer"className="pr-10 hover:text-black"><FaSquareInstagram size={40} /></a>
        <a href="https://wa.me/8667248726" target="_blank" rel="noopener noreferrer" className="pr-10 hover:text-black"><FaSquareWhatsapp size={40} /></a>
        <a href="https://www.facebook.com/kalpana R"target='_blank' rel='noopener noreferrer' className="hover:text-black"><FaFacebook size={40} /></a>
        </div>
        
        </div>
        <div>
        <img className='w-full h-[400px]' src={images} alt='heroinimage' />
        </div>
         
    </section>
}