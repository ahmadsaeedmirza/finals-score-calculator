import React from 'react';
import './../index.css';

const QuizOne = ({ title, number, onChange }) => {
  return (
    <div className="flex gap-2 py-2 font-teachers">
      <h3 className="md:text-lg flex-1 text-[#E5D4A3]">{title} {number}:</h3>
      <div className="relative flex-1">
        <label className='absolute -top-3 left-3 bg-[#111827] text-[#E5D4A3] text-sm md:text-base px-3'>Obtained</label>
        <input 
          type="number" 
          min={0} 
          className='px-2 py-2 border-2 border-[#E5D4A3] focus:border-[#E5D4A3] outline-none focus:outline-none font-teachers rounded-md w-full bg-[#111827] text-white'
          onChange={(e) => onChange('obtained', e.target.value)}
        />
      </div>
      <div className="relative flex-1">
        <label className='absolute -top-3 left-3 bg-[#111827] text-[#E5D4A3] text-sm md:text-base px-3'>Total</label>
        <input 
          type="number" 
          min={0} 
          defaultValue={10} 
          className='px-2 py-2 border-2 border-[#E5D4A3] focus:border-[#E5D4A3] outline-none focus:outline-none font-teachers rounded-md w-full bg-[#111827] text-white' 
          onChange={(e) => onChange('total', e.target.value)}
        />
      </div>
    </div>
  );
};

export default QuizOne;
