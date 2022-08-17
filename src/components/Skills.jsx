import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Vue from '../assets/vue.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
// import FireBase from '../assets/firebase.png';
import Vite from '../assets/vite.svg';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
// import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='pt-[250px] md:pt-0 w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=''>
              <p className='pt-4 text-4xl font-bold inline border-b-4 border-yellow-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#686a6d] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#686a6d] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#686a6d] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>Tailwind</p>
              </div>
              <div className='shadow-md shadow-[#686a6d] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Vite} alt="HTML icon" />
                  <p className='my-4'>VITE</p>
              </div>
              <div className='shadow-md shadow-[#686a6d] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Vue} alt="HTML icon" />
                  <p className='my-4'>VUE</p>
              </div>
              <div className='shadow-md shadow-[#686a6d] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#686a6d] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#686a6d] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              
              
          </div>
      </div>
    </div>
  );
};

export default Skills;
