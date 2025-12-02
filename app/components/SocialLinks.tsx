'use client'
import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const SocialLinks = () => {
    return (
        <div className='fixed left-5 hidden md:flex h-screen items-center justify-center z-50'>
            <Dock>
                <DockIcon href="https://x.com/YousufAaqil" icon={<XLogo className="w-full h-full text-white" />} />
                <DockIcon href="https://github.com/Aaqilyousuf" icon={<Github className="w-full h-full text-white" />} />
                <DockIcon href="https://www.linkedin.com/in/aaqil-yousuf/" icon={<Linkedin className="w-full h-full text-white" />} />
                <DockIcon href="mailto:aaqilyousuf@gmail.com" icon={<Mail className="w-full h-full text-white" />} />
            </Dock>
        </div>
    )
}

const XLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
)

function Dock({ children, className }: { children: React.ReactNode; className?: string }) {
    let mouseY = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseY.set(e.pageY)}
            onMouseLeave={() => mouseY.set(Infinity)}
            className={`mx-auto flex flex-col h-auto gap-4 items-center rounded-2xl bg-gray-900/50 px-3 py-4 backdrop-blur-md border border-white/10 ${className}`}
        >
            {React.Children.map(children, (child) => {
                return React.cloneElement(child as React.ReactElement, { mouseY: mouseY });
            })}
        </motion.div>
    );
}

function DockIcon({ mouseY, href, icon }: { mouseY?: MotionValue; href: string; icon: React.ReactNode }) {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseY!, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
        return val - bounds.y - bounds.height / 2;
    });

    let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <Link href={href} target="_blank">
            <motion.div
                ref={ref}
                style={{ width, height: width }}
                className="aspect-square rounded-full bg-gray-800 flex items-center justify-center relative shadow-lg hover:bg-gray-700 transition-colors border border-white/5"
            >
                <div className="h-1/2 w-1/2 flex items-center justify-center">
                    {icon}
                </div>
            </motion.div>
        </Link>
    );
}

export default SocialLinks