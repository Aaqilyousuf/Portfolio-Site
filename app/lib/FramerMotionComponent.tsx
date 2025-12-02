"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';

const FramerMotionComponent = () => {
    const text = "Hi, I'm Aaqil"
    const subtitle = "Wired In."

    const defaultAnimations = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.1
            }
        },
    }

    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.5, once: true })

    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-between w-full gap-8'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-5xl md:text-7xl font-bold text-white leading-tight flex flex-wrap items-center gap-4'>
                    <span className='sr-only'>{text}</span>
                    <motion.span
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        aria-hidden
                        ref={ref}
                        transition={{ staggerChildren: 0.05 }}
                        className='inline-block'
                    >
                        {text.split(" ").map((word, wordIndex) => (
                            <span key={wordIndex} className='inline-block mr-4 last:mr-0'>
                                {word.split('').map((char, charIndex) => (
                                    <motion.span 
                                        key={charIndex} 
                                        className='inline-block' 
                                        variants={defaultAnimations}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, rotate: -20 }}
                        animate={isInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -20 }}
                        transition={{ delay: 1, duration: 0.5, type: "spring" }}
                        className='inline-block origin-bottom-right'
                    >

                    </motion.span>
                </h1>
                <p className='text-xl md:text-2xl text-zinc-400 font-medium'>
                    {subtitle}
                </p>
            </div>

            <div className='relative w-24 h-24 md:w-36 md:h-36 shrink-0'>
                <img 
                    src="/pfp.jpeg" 
                    alt="Aaqil" 
                    className='w-full h-full object-cover rounded-full border-2 border-zinc-800 shadow-xl'
                />
            </div>
        </div>
    )
}

export default FramerMotionComponent