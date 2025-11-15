import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './../index.css'

const Result = ({ a, aMinus, bPlus, b, bMinus, cPlus, c, cMinus }) => {
  return (
    <div className='py-8'>
        <h3 className="font-teachers font-bold text-2xl px-8 text-[#E5D4A3]">In Finals you need to score:</h3>

      <div className="px-8 flex flex-col md:flex-row text-[#E5D4A3] justify-between pt-8">

        <div className="w-[250px] h-[250px] relative m-auto">
          <CircularProgressbar
            value={a > 50 || a === 0 ? 0 : a*2}
            styles={buildStyles({
              pathColor: "#3CE46C",
              trailColor: "#1A2433",
            })}
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-lg">        
            <div className="font-teachers font-bold text-3xl md:text-5xl">{a > 50 ? 0 : Math.ceil(a)}/50</div>
            <div className="font-teachers text-lg md:text-2xl">for A</div> 
          </div>
        </div>

        <div className="flex flex-col w-ful md:w-1/2 pt-8 md:pt-0 px-4 text-lg">
          <div className="flex flex-row border-t-2 border-[#E5D4A3] border-b-2">
            <p className="font-teachers text-center font-semibold text-lg w-1/3">GPA</p>
            <p className="font-teachers text-center font-semibold text-lg w-1/3">Grade</p>
            <p className="font-teachers text-center font-semibold text-lg w-1/3">Required</p>
          </div>

          <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
            <p className="font-teachers text-center w-1/3">4.00</p>
            <p className="font-teachers text-center w-1/3">A</p>
            <p className="font-teachers text-center w-1/3">{a > 50 ? 'Not Possible' : Math.ceil(a)}</p>
          </div>

          <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
            <p className="font-teachers text-center w-1/3">3.66</p>
            <p className="font-teachers text-center w-1/3">A-</p>
            <p className="font-teachers text-center w-1/3">{a > 50 ? 'Not Possible' : Math.ceil(aMinus)}</p>
          </div>

          <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
            <p className="font-teachers text-center w-1/3">3.33</p>
            <p className="font-teachers text-center w-1/3">B+</p>
            <p className="font-teachers text-center w-1/3">{a > 50 ? 'Not Possible' : Math.ceil(bPlus)}</p>
          </div>

          <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
            <p className="font-teachers text-center w-1/3">3.00</p>
            <p className="font-teachers text-center w-1/3">B</p>
            <p className="font-teachers text-center w-1/3">{a > 50 ? 'Not Possible' : Math.ceil(b)}</p>
          </div>

          <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
            <p className="font-teachers text-center w-1/3">2.66</p>
            <p className="font-teachers text-center w-1/3">B-</p>
            <p className="font-teachers text-center w-1/3">{a > 50 ? 'Not Possible' : Math.ceil(bMinus)}</p>
          </div>

          <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
            <p className="font-teachers text-center w-1/3">2.33</p>
            <p className="font-teachers text-center w-1/3">C+</p>
            <p className="font-teachers text-center w-1/3">{a > 50 ? 'Not Possible' : Math.ceil(cPlus)}</p>
          </div>

          <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
            <p className="font-teachers text-center w-1/3">2.00</p>
            <p className="font-teachers text-center w-1/3">C</p>
            <p className="font-teachers text-center w-1/3">{a > 50 ? 'Not Possible' : Math.ceil(c)}</p>
          </div>

          <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
            <p className="font-teachers text-center w-1/3">1.66</p>
            <p className="font-teachers text-center w-1/3">C-</p>
            <p className="font-teachers text-center w-1/3">{a > 50 ? 'Not Possible' : Math.ceil(cMinus)}</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Result