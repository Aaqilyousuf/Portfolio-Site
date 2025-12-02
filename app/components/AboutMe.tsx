import React from 'react';
import Skills from '../lib/Skills';
import { Download } from 'lucide-react';

const AboutMe = () => {
    return (
        <div className='mt-24 w-[375px] m-auto md:w-[720px]'>
            <h2 className='text-3xl font-bold mb-8 text-white'>About Me</h2>
            
            <div className='flex flex-col gap-10'>
                {/* Education Section */}
                <div>
                    <h3 className='text-xl font-semibold mb-4 text-zinc-200'>Education</h3>
                    <div className='flex items-center justify-between group'>
                        <div className='flex items-center gap-4'>
                            <div className='w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl font-medium text-white shrink-0'>
                                E
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='font-bold text-lg text-white leading-tight'>Easwari Engineering College</h3>
                                <p className='text-zinc-400 text-sm md:text-base'>Bachelor Of Technology - Information Technology</p>
                            </div>
                        </div>
                        <div className='text-zinc-500 text-sm md:text-base font-medium whitespace-nowrap'>
                            2022 - 2026
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div>
                    <h3 className='text-xl font-semibold mb-4 text-zinc-200'>Skills</h3>
                    <div className='flex flex-wrap gap-2'>
                        <Skills />
                    </div>
                </div>

                {/* Resume Section */}
                <div>
                    <h3 className='text-xl font-semibold mb-4 text-zinc-200'>Resume</h3>
                    <a 
                        href="https://drive.google.com/file/d/1wZAy8OnfvFWjVF3T9SdImzktdS4YZHrL/view?usp=sharing" 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        download
                        className='inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-md text-white transition-colors'
                    >
                        <Download size={18} />
                        <span>Download Resume</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
