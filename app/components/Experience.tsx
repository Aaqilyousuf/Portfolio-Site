import React from 'react'
import OpenSource from './OpenSource'

const Experience = () => {
    const experiences = [
        {
            company: "Altruisty Pvt. Ltd.",
            role: "Fullstack developer intern",
            date: "Nov 2024 - Feb 2025",
            logo: "A"
        },
        {
            company: "Headstarter AI",
            role: "Software Engineer Fellow",
            date: "Jul 2024 - Sep 2024",
            logo: "H"
        }
    ]

    return (
        <div className='mt-24 w-[375px] m-auto md:w-[720px]'>
            <h2 className='text-3xl font-bold mb-8 text-white'>Work Experience</h2>
            <div className='flex flex-col gap-8'>
                {experiences.map((exp, index) => (
                    <div key={index} className='flex items-center justify-between group'>
                        <div className='flex items-center gap-4'>
                            <div className='w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl font-medium text-white shrink-0'>
                                {exp.logo}
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='font-bold text-lg text-white leading-tight'>{exp.company}</h3>
                                <p className='text-zinc-400 text-sm md:text-base'>{exp.role}</p>
                            </div>
                        </div>
                        <div className='text-zinc-500 text-sm md:text-base font-medium whitespace-nowrap'>
                            {exp.date}
                        </div>
                    </div>
                ))}
            </div>

            <OpenSource />
        </div>
    )
}

export default Experience