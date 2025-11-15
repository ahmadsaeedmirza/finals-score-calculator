import React, { useState, useEffect } from 'react'
import './../index.css'

const Mids = ({ setMidsTotal, setLabMidTotal, setLabFinalTotal }) => {
  const [mids, setMids] = useState(0)
  const [midsTotalLocal, setMidsTotalLocal] = useState(25)

  const [labMid, setLabMid] = useState(0)
  const [labMidTotalLocal, setLabMidTotalLocal] = useState(25)

  const [labFinal, setLabFinal] = useState(0)
  const [labFinalTotalLocal, setLabFinalTotalLocal] = useState(50)

  useEffect(() => {
    const normalizedMids = midsTotalLocal > 0 ? (mids / midsTotalLocal) * 25 : 0
    const normalizedLabMid = labMidTotalLocal > 0 ? (labMid / labMidTotalLocal) * 25 : 0
    const normalizedLabFinal = labFinalTotalLocal > 0 ? (labFinal / labFinalTotalLocal) * 50 : 0

    const nMids = Math.round(normalizedMids * 100) / 100
    const nLabMid = Math.round(normalizedLabMid * 100) / 100
    const nLabFinal = Math.round(normalizedLabFinal * 100) / 100

    if (typeof setMidsTotal === 'function') setMidsTotal(nMids)
    if (typeof setLabMidTotal === 'function') setLabMidTotal(nLabMid)
    if (typeof setLabFinalTotal === 'function') setLabFinalTotal(nLabFinal)
  }, [
    mids, midsTotalLocal,
    labMid, labMidTotalLocal,
    labFinal, labFinalTotalLocal,
    setMidsTotal, setLabMidTotal, setLabFinalTotal
  ])

  return (
    <div className='flex flex-col font-teachers'> 
      <div className='flex-1 rounded-lg bg-[#111827] p-4'>
        <h3 className="text-xl font-teachers font-bold mb-4 text-[#E5D4A3]">Mid Terms</h3>

        {/* Theory */}
        <h3 className="md:text-lg text-[#E5D4A3]">Theory:</h3>
        <div className="flex gap-2 py-2">
          <div className="relative flex-1">
            <label className='absolute -top-3 left-3 bg-[#111827] px-3 text-sm md:text-base text-[#E5D4A3]'>Obtained</label>
            <input type="number" min={0}
                   className='px-2 py-2 border-2 border-[#E5D4A3] focus:border-[#E5D4A3] outline-none focus:outline-none font-teachers rounded-md w-full bg-[#111827] text-white'
                   onChange={(e)=> setMids(Number(e.target.value) || 0)} />
          </div>
          <div className="relative flex-1">
            <label className='absolute -top-3 left-3 bg-[#111827] px-3 text-sm md:text-base text-[#E5D4A3]'>Total</label>
            <input type="number" min={0} defaultValue={25}
                   className='px-2 py-2 border-2 border-[#E5D4A3] focus:border-[#E5D4A3] outline-none focus:outline-none font-teachers rounded-md w-full bg-[#111827] text-white'
                   onChange={(e)=> setMidsTotalLocal(Number(e.target.value) || 0)} />
          </div>
        </div>

        {/* Lab Mid */}
        <h3 className="md:text-lg text-[#E5D4A3]">Lab Mid: (if applicable)</h3>
        <div className="flex gap-2 py-2">
          <div className="relative flex-1">
            <label className='absolute -top-3 left-3 bg-[#111827] px-3 text-sm md:text-base text-[#E5D4A3]'>Obtained</label>
            <input type="number" min={0}
                   className='px-2 py-2 border-2 border-[#E5D4A3] focus:border-[#E5D4A3] outline-none focus:outline-none font-teachers rounded-md w-full bg-[#111827] text-white'
                   onChange={(e)=> setLabMid(Number(e.target.value) || 0)} />
          </div>
          <div className="relative flex-1">
            <label className='absolute -top-3 left-3 bg-[#111827] px-3 text-sm md:text-base text-[#E5D4A3]'>Total</label>
            <input type="number" min={0} defaultValue={25}
                   className='px-2 py-2 border-2 border-[#E5D4A3] focus:border-[#E5D4A3] outline-none focus:outline-none font-teachers rounded-md w-full bg-[#111827] text-white'
                   onChange={(e)=> setLabMidTotalLocal(Number(e.target.value) || 0)} />
          </div>
        </div>

        {/* Lab Final */}
        <h3 className="md:text-lg text-[#E5D4A3]">Lab Final: (expected)</h3>
        <div className="flex gap-2 py-2">
          <div className="relative flex-1">
            <label className='absolute -top-3 left-3 bg-[#111827] px-3 text-sm md:text-base text-[#E5D4A3]'>Obtained</label>
            <input type="number" min={0}
                   className='px-2 py-2 border-2 border-[#E5D4A3] focus:border-[#E5D4A3] outline-none focus:outline-none font-teachers rounded-md w-full bg-[#111827] text-white'
                   onChange={(e)=> setLabFinal(Number(e.target.value) || 0)} />
          </div>
          <div className="relative flex-1">
            <label className='absolute -top-3 left-3 bg-[#111827] px-3 text-sm md:text-base text-[#E5D4A3]'>Total</label>
            <input type="number" min={0} defaultValue={50}
                   className='px-2 py-2 border-2 border-[#E5D4A3] focus:border-[#E5D4A3] outline-none focus:outline-none font-teachers rounded-md w-full bg-[#111827] text-white'
                   onChange={(e)=> setLabFinalTotalLocal(Number(e.target.value) || 0)} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Mids
