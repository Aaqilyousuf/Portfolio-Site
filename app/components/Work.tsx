'use client'
import React from 'react';
import Project from './Project';

const Work = () => {
  return (
    <div className='mt-24 w-[375px] m-auto md:w-[720px]'>
      <h2 className='text-3xl font-bold mb-8 text-white'>Projects</h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Project
          projectName='DocuMind'
          projectImgLink='/documind.png'
          Description='AI-driven document management platform using RAG 🧠'
          key={1}
          projectLink='https://github.com/Aaqilyousuf/DocuMind'
          tech={[
            { link: "react.png", name: "React" },
            { link: "next.png", name: "Flask" },
            { link: "typescript.png", name: "TypeScript" },
            { link: "docker.png", name: "Docker" },
            { link: "tailwind.png", name: "Tailwind" },
            { link: "python.png", name: "RAG" },
            { link: "postgres.png", name: "HuggingFace" },
          ]}
        />

        <Project
          projectName='Folder Organizer CLI'
          projectImgLink='/folder-org.png'
          Description='CLI tool to organize files into categorized subfolders 📂'
          key={2}
          projectLink='https://github.com/Aaqilyousuf/folder-organizer-cli'
          tech={[
            { link: "typescript.png", name: "TypeScript" },
            { link: "node-js.png", name: "Node.js" },
            { link: "node-js.png", name: "NPM" },
          ]}
        />

        <Project
          projectName='Video Chat App'
          projectImgLink='/video_chat.jpeg'
          Description='Real-time video calling app using WebRTC 📹'
          key={3}
          projectLink='https://github.com/Aaqilyousuf/Video-chat-app'
          tech={[
            { link: "react.png", name: "React" },
            { link: "expressw.png", name: "Express" },
            { link: "ws.png", name: "WebSockets" },
            { link: "docker.png", name: "WebRTC" },
          ]}
        />

        <Project
          projectName='BrainBlitz Backend'
          projectImgLink='/project2.png'
          Description='Spring Boot backend for a fast-paced online quiz app ⚡'
          key={4}
          projectLink='https://github.com/Aaqilyousuf/BrainBlitz-Backend'
          tech={[
            { link: "coffee.png", name: "Java" },
            { link: "spring.png", name: "Spring Boot" },
            { link: "docker.png", name: "Docker" },
            { link: "postgres.png", name: "PostgreSQL" },
          ]}
        />

        <Project
          projectName='AI Research Assistant'
          projectImgLink='/web-ext.png'
          Description='Web extension to summarize research using LLMs 🤖'
          key={5}
          projectLink='https://github.com/Aaqilyousuf/AI-Research-Assistant-Web-Extension'
          tech={[
            { link: "react.png", name: "React" },
            { link: "coffee.png", name: "Java" },
            { link: "spring.png", name: "Spring Boot" },
            { link: "docker.png", name: "Docker" },
          ]}
        />

        <Project
          projectName='ATS Multi-Client'
          projectImgLink='/Ats.png'
          Description='Complete recruitment management platform (MERN) 💼'
          key={6}
          projectLink='https://github.com/Aaqilyousuf/Application-Tracking-System'
          tech={[
            { link: "react.png", name: "React" },
            { link: "node-js.png", name: "Node.js" },
            { link: "mongodb.png", name: "MongoDB" },
            { link: "tailwind.png", name: "Tailwind" },
          ]}
        />
      </div>
    </div>
  );
}

export default Work;
