import React from 'react'
import './../index.css'

const CourseDetails = ({ setTheoryCredit, setLabCredit }) => {
  return (
    <div className='px-4 md:px-8 pt-5'>
        {/* <div className="bg-[#111827] rounded-lg"> */}
            <h2 className='font-teachers text-2xl font-semibold pb-3 text-[#E5D4A3]'>Input Course Details:</h2>

            <div className='flex flex-col lg:flex-row gap-2'>
                <div className="relative flex-1 pb-3 md:pb-0">
                    <label className='absolute -top-3 left-3 font-teachers bg-[#0D1117] px-3 text-[#E5D4A3]'>Course Name</label>
                    <input 
                        type="text" 
                        className='px-2 py-2 border-2 border-[#E5D4A3] focus:border-[#E5D4A3] outline-none focus:outline-none font-teachers rounded-md w-full bg-[#0D1117] text-white' 
                        />
                </div>

                <div className="relative flex-1 pb-3 md:pb-0">
                    <label className='absolute -top-3 left-3 font-teachers bg-[#0D1117] px-3 text-[#E5D4A3]'>Theory Credit Hours</label>
                    <input 
                        type="number" 
                        className='px-2 py-2 border-2 border-[#E5D4A3] focus:border-[#E5D4A3] outline-none focus:outline-none font-teachers rounded-md w-full bg-[#0D1117] text-white' 
                        onChange={(e) => setTheoryCredit(Number(e.target.value))}
                        />
                </div>

                <div className="relative flex-1">
                    <label className='absolute -top-3 left-3 font-teachers bg-[#0D1117] px-3 text-[#E5D4A3]'>Lab Credit Hours</label>
                    <input 
                        type="number" 
                        className='px-2 py-2 border-2 border-[#E5D4A3] focus:border-[#E5D4A3] outline-none focus:outline-none font-teachers rounded-md w-full bg-[#0D1117] text-white' 
                        onChange={(e) => setLabCredit(Number(e.target.value))}
                        />
                </div>
            </div>

        {/* </div> */}
    </div>
  )
}

export default CourseDetails