// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'

import AOS from 'aos';
  import 'aos/dist/aos.css';
const Trusted = () => {
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
         <div className="max-w-[1340px] my-[20px]" data-aos="fade-up">
  <div className="text-[#00B2FF] text-center sm:text-tt  xs:text-mt md:text-title font-[600] mb-4">
    <p>Trusted By Brand’s</p>
  </div>
  <div className=" flex  justify-between  gap-2 ">
    <div className="mx-auto">
      <img src="images/trusted1.png" alt />
    </div>
    <div className="mx-auto">
      <img src="images/trusted2.png" alt />
    </div>
    <div className="mx-auto ">
      <img src="images/trusted3.png" alt />
    </div>
  </div>
</div>

    </>
  )
}

export default Trusted