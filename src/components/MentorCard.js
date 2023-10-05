import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'

import { useState,useEffect } from 'react'

const CardVariants = {
    entry:{
        x:0
    },
    hidden:{
        x:"-100vw"
    },
    exit:{
        x:"100vw",
        transition:{
            stiffness:1
        }
    }

}

// Update names of mentors and their img src links in the below list

const contentList = [
    {
        img:"",
        name:"FirstName1 LastName"
    },
    {
        img:"",
        name:"FirstName1 LastName"
    },
    {
        img:"",
        name:"FirstName1 LastName"
    }
]

export default function MentorCard() {
    const [index,setIndex] = useState(0)
    useEffect(()=>{
      const timer = setInterval(()=>{
    setIndex((prev)=> prev+1==contentList.length?0:prev+1)
    },2000)
    return () => clearInterval(timer);
})
  return (
    <div className='mb-56 mt-36 overflow-hidden'>
    <div className='flex flex-col justify-center overflow-hidden min-h-full'>
        <h1 className='text-6xl md:text-step-8 my-4 font-bold text-center  mb-10'>
                Mentors
            </h1>
    <div className='flex flex-row justify-center overflow-hidden'>
    <AnimatePresence mode="wait">
      <motion.div className='flex flex-col bg-white bg-opacity-90 h-96 w-80 text-center items-center justify-evenly'
      variants={CardVariants}
      key={index}
      initial="hidden"
      animate="entry"
      exit="exit"
      >
        <div className='bg-[#101010] h-60 w-60 rounded-sm'>
            <img src={contentList[index].src} alt={contentList[index].name}></img>
        </div>
      <div className='text-3xl font-normal text-[#101010]'>{contentList[index].name}</div>
    </motion.div>
    </AnimatePresence>
    </div>
    </div>
    </div>
  )
}
