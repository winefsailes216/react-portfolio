import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/007f599e-7f6f-4bd2-835d-36756ac5d8ea" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// This is powered by getform.io. You may submit the form below or shoot me an email instead - winefsailes216@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' required ></textarea>
            <button className='text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's get in touch</button>
        </form>
    </div>
  )
}

export default Contact