// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
const Navbar = () => {
      useEffect(() => {
        AOS.init({
            offset:100,
            duration: 1500,
            easing: 'ease-in-out',
            once: true,
        });
   

    }, []);
    return (
        <>
        

            <div className="max-w-[90%] w-[1340px] hidden md:block mx-auto fixed bottom-[15px] left-0 right-0     border border[black] bg-[#F5F5F5] rounded-full  z-[1]" data-aos="fade-down">
                <nav>
                    <ul className='flex justify-between px-2 py-2'>
                        <li className=' rounded-full hover:text-[#FFF] px-4 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] active:bg-[#00B2FF] ' >Home
                        </li>
                        <li className='  rounded-full hover:text-[#FFF] px-2 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>About Us</li>
                        <li className='  rounded-full hover:text-[#FFF] px-4 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>Services</li>
                        <li className='  rounded-full hover:text-[#FFF] px-1 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '> Recharge & Plans</li>
                       
                        <li className='  rounded-full hover:text-[#FFF] px-2 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>Our Portfolio</li>
                        <li className='  rounded-full hover:text-[#FFF] px-4 py-1 lg:text-p md:text-tp sm:text-mp hover:bg-[#00B2FF] '>Sign-up </li>
                    </ul>
                    
                </nav>
            </div>
        </>
    )
}

export default Navbar