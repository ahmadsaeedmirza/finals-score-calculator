import React from 'react'
import './../index.css'

const Header = () => {
  return (
    <div className='px-4 md:px-8 py-4 flex flex-row justify-between'>
        <h1 className="inline-block font-teachers sm:text-lg lg:text-lg border-b-2 border-[#E5D4A3] text-[#E5D4A3]">FINALS CALCULATOR</h1>

        <p className="inline-block font-teachers border-b-2 border-[#E5D4A3] text-[#E5D4A3]">
          <a href="mailto:ahmadsaeedcodes@gmail.com?subject=Hello&body=I%20want%20to%20connect">Contact Me</a>
        </p>
    </div>
  )
}

export default Header