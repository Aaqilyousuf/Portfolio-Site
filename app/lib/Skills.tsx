import React from 'react'

const Skills = () => {
    const skillsList = [
        // Languages
        { imgURL: "/c.png", Name: "C" },
        { imgURL: "/cpp.png", Name: "C++" },
        { imgURL: "/java.png", Name: "Java" },
        { imgURL: "/python.png", Name: "Python" },
        { imgURL: "/js.png", Name: "JavaScript" },
        { imgURL: "/typescript.png", Name: "TypeScript" },
        
        // Frameworks & Libraries
        { imgURL: "/react.png", Name: "React.js" },
        { imgURL: "/next.png", Name: "Next.js" },
        { imgURL: "/node-js.png", Name: "Node.js" },
        { imgURL: "/expressw.png", Name: "Express.js" },
        { imgURL: "/django.png", Name: "Django" },
        { imgURL: "/springboot.png", Name: "Spring Boot" },
        { imgURL: "/tailwind.png", Name: "Tailwind CSS" },
        { imgURL: "/mui.png", Name: "Material UI" },
        { imgURL: "/shadcn.png", Name: "Shadcn/UI" },
        
        // Databases
        { imgURL: "/mongodb.png", Name: "MongoDB" },
        { imgURL: "/postgres.png", Name: "PostgreSQL" },
        { imgURL: "/mysql.png", Name: "MySQL" },
        { imgURL: "/redis.png", Name: "Redis" },
        
        // Cloud & Tools
        { imgURL: "/linux.png", Name: "Linux" },
        { imgURL: "/docker.png", Name: "Docker" },
        { imgURL: "/kubernetes.png", Name: "Kubernetes" },
        { imgURL: "/git.png", Name: "Git" },
        { imgURL: "/githubicon.png", Name: "GitHub" },
        { imgURL: "/postman.png", Name: "Postman" },
        { imgURL: "/ws.png", Name: "WebSockets" },
    ]
    return (
        <>
            {skillsList.map((skill, index) => (
                <div key={index} className='bg-white text-black px-4 py-1.5 rounded-lg font-semibold text-sm hover:bg-zinc-200 transition-colors cursor-default'>
                    {skill.Name}
                </div>
            ))}
        </>
    )
}

export default Skills