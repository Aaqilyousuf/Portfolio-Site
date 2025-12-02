import AboutMe from './components/AboutMe';
import Work from './components/Work';
import GitHubCalendarComponent from './lib/GitHubCalendar';

import FramerMotionComponent from './lib/FramerMotionComponent';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Experience from './components/Experience';

const Body = () => {
    return (
        <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden custom-scrollbar " >
            <div className='w-[375px] m-auto md:w-[720px]'>
                <div className='mt-32'>
                    <FramerMotionComponent />
                </div>

                <div className='text-slate-200 desc-color text-[13px] md:text-[15px] my-4' >
                    A Backend engineer passionate about building scalable, reliable systems and developer tools.
                    Open-source contributor exploring AI-driven and intelligent backend architectures.
                </div>
            </div>
            <div className='w-[375px] m-auto md:w-[720px]'>
                <GitHubCalendarComponent />
            </div>
            <Experience />
            <AboutMe />
            <Blog />
            <Work />
            <Footer />
        </div>
    )
}

export default Body