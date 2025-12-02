import React from 'react'
import { ExternalLink } from 'lucide-react'

const Project = ({ 
    projectName,
    projectImgLink,
    projectLink,
    Description,
    tech
}: {
    projectName: string,
    projectImgLink: string
    projectLink: string,
    Description: string,
    tech: { link: string, name: string }[]
}) => {
    return (
        <a 
            href={projectLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className='block group'
        >
            <div className='bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors'>
                {/* Image Section */}
                <div className='relative h-48 overflow-hidden border-b border-zinc-800'>
                    <img 
                        src={projectImgLink} 
                        alt={projectName}
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' 
                    />
                    <div className='absolute top-3 right-3 bg-black/50 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity'>
                        <ExternalLink size={16} className='text-white' />
                    </div>
                </div>

                {/* Content Section */}
                <div className='p-6'>
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors'>
                        {projectName}
                    </h3>
                    <p className='text-zinc-400 text-sm mb-6 line-clamp-2'>
                        {Description}
                    </p>

                    {/* Tech Stack */}
                    <div className='flex flex-wrap gap-2'>
                        {tech.map((item, index) => (
                            <div 
                                key={index}
                                className='flex items-center gap-1.5 px-3 py-1 bg-zinc-800 rounded-full border border-zinc-700/50'
                            >
                                <span className='text-xs text-zinc-300 font-medium'>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Project