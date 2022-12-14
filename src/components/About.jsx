import React from 'react';
import AboutHero from '../assets/about-hero.jpg';
const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
            <img src={AboutHero} alt='Logo Image' className='m-auto max-w-[300px] rounded-full'/>
              </div>
            <div>
            <p className='text-2xl mb-3'>Hi. I'm <span className='text-yellow-400'>Winefredo</span>, nice to meet you. Please take a look around.</p>
            
            <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in front end development 
              using the latest Javascript frameworks for clients ranging from individuals
              and small-businesses, all the way to large enterprise corporations. Now, 
              what would you do if you had a software expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
