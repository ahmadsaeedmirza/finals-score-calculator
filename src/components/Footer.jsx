import React from 'react'
import './../index.css'
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin-2.svg';
import emailIcon from '../assets/mail-2.svg';
import discordIcon from '../assets/discord-2.svg';

const Footer = () => {
  return (
    <div className='bg-[#161B22] flex flex-col-reverse md:flex-row w-full px-4 md:px-8 pt-8 pb-4 md:pb-8'>

        <div className="w-full md:w-1/3 m-auto md:m-0">
            <p className="text-white text-center font-teachers">&copy; 2025 Ahmad Saeed.</p>
        </div>

        <div className="w-full md:w-2/3 flex flex-row pb-4 md:pb-0">
            <div className="w-1/2 flex flex-row text-white justify-around">
                <a href="href=mailto:ahmadsaeedcodes@gmail.com?subject=Feedback%20on%20Calculator" className="relative group">
                    <p className="font-teachers">
                        Feedback
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </p>
                </a>
                <a href="mailto:ahmadsaeedcodes@gmail.com?subject=Hello&body=I%20want%20to%20connect" className="relative group">
                    <p className="font-teachers">
                        Contact Me
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </p>
                </a>
            </div>

            <div className="w-1/2">
                <div className="flex w-full md:w-1/2 flex-row m-auto justify-around md:justify-between">
                    <a href="https://github.com/ahmadsaeedmirza" target="_blank" >
                        <img src={githubIcon} alt="Github Icon" className='h-[25px] w-auto' />
                    </a>
                    <a href="https://www.linkedin.com/in/ahmad-saeed-057a952a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" >
                        <img src={linkedinIcon} alt="LinkedIn Icon" className='h-[25px] w-auto' />
                    </a>
                    <a href="mailto:ahmadsaeedcodes@gmail.com">
                        <img src={emailIcon} alt="Mail Icon" className='h-[25px] w-auto' />
                    </a>
                    <a href="https://discord.com/users/1387767600624308304" target="_blank">
                        <img src={discordIcon} alt="Discord Icon" className='h-[25px] w-auto' />
                    </a>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Footer