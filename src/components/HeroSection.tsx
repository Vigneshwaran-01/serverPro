import React from 'react';
import '../index.css'
import { RiArrowRightLine } from 'react-icons/ri';
interface heroProps {
  herodata: {
    title: string;
    description: string;
  };
  
    onClose: () => void;
 
}



const HeroSection: React.FC<heroProps> = ({herodata,onClose}) => {
  return (
    <section className="text-center py-10 bg-gray-800 flex justify-center ">
       <div className=' space-y-4 flex flex-col justify-center items-center p-4'>
        <h1 className='text-4xl text-blue-400 font-semibold lg:text-5xl'>{herodata.title}</h1>
        <div className='space-y-5 min-w-fit flex flex-col md:max-w-lg lg:max-w-2xl  '>
            <p>{herodata.description}</p>
             <button
             onClick={onClose}
              className=' bg-blue-800 flex justify-center py-2 px-2 rounded-lg text-white items-center gap-5 m-auto' >
                <h2 className='text-base font-medium'>Get Started</h2>
                 <RiArrowRightLine className='font-extrabold text-xl' />
            </button>
        </div>
       </div>
    </section>
  );
};

export default HeroSection;