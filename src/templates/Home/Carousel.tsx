import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

type Props = {
  children?: JSX.Element | JSX.Element[];
  
}

const DefaultCarousel = (props: Props) => {
  const [curr, setCurr] = useState<number>(0)

  const prev = () => setCurr((curr: number) => curr === 0 ? props.children.length - 1 : curr - 1)
  const next = () => setCurr((curr: number) => curr === 0 ? props.children.length - 1 : curr + 1)
  return (
    <div className='overflow-hidden relative'>
      <div className='flex transition-transform ease-linear duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
        {props.children}
      </div>
     <div className='absolute inset-0 flex items-center justify-center p-4'>
     <button onClick={prev} className='button-left p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
        <BsChevronLeft size={40} />
      </button>
      <button onClick={next} className='button-right p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
        <BsChevronRight size={40}/>
      </button>
     </div>
    </div>
  )
}

export { DefaultCarousel }