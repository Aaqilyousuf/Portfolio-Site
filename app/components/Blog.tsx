import React from 'react'

const Blog = () => {
    const blogs = [
        {
            title: "How to authenticate git via CLI after password login was removed",
            description: "A guide on using Personal Access Tokens (PAT) for Git authentication.",
            tags: ["Git", "CLI", "Authentication"],
            link: "https://medium.com/@aaqilyousuf/how-to-authenticate-git-via-cli-after-password-login-was-removed-2021-onwards-6d8b74548ce8"
        },
        {
            title: "Sending data from frontend to backend in a MERN stack project",
            description: "A tutorial on connecting React frontend with Node/Express backend.",
            tags: ["MERN Stack", "React", "Node.js"],
            link: "https://aaqilyousuf.hashnode.dev/sending-data-from-frontend-to-backend-in-a-mern-stack-project"
        }
    ]

    return (
        <div className='mt-24 w-[375px] m-auto md:w-[720px]'>
            <div className='mb-8'>
                <h2 className='text-3xl font-bold text-white text-center mb-2'>Read my latest blogs</h2>
                <p className='text-zinc-400 text-center text-sm md:text-base'>
                    I write about web development, DevOps and my experiences in tech.
                    <br className='hidden md:block' /> Here are some of my latest articles.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {blogs.map((blog, index) => (
                    <a 
                        key={index} 
                        href={blog.link}
                        className='block p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800/50 transition-colors group'
                    >
                        <h3 className='text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors'>
                            {blog.title}
                        </h3>
                        <p className='text-zinc-400 text-sm mb-6 leading-relaxed'>
                            {blog.description}
                        </p>
                        <div className='flex flex-wrap gap-2'>
                            {blog.tags.map((tag, tagIndex) => (
                                <span 
                                    key={tagIndex} 
                                    className='px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full font-medium'
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Blog
