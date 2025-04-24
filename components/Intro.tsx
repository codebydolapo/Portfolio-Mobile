
import Typewriter from 'typewriter-effect'
import Link from 'next/link'
import { resumeLink } from '../data/resume'



function Intro() {

    return (
        <div className={`w-full md:min-h-[100vh] flex justify-center align-center xs:min-h-[50vh]`} id='home'>
            <div className={`md:w-[100%] md:min-h-[70vh] xs:w-full xs:min-h-[80vh]`}>
                <div className={`w-full md:h-[60vh] flex flex-col justify-center md:items-center relative xs:h-[30vh] xs:items-start`}>
                    <div className={`w-full h-full overflow-hidden `}>
                        <img className={`w-full h-auto`} alt='' src='/images/bg.jpeg' />
                    </div>
                    <img className={`md:w-[15rem] md:h-[15rem] rounded-full mx-2 absolute md:bottom-[-5rem] border-[7px] border-white xs:w-[10rem] xs:h-[10rem] xs:bottom-[-1rem]`} alt='' src='/images/me.jpg' />
                </div>

                <div className={`w-full md:h-[40vh] flex flex-col items-center justify-around md:mt-[6rem] xs:min-h-[50vh] mt-4`}>
                    <div className={`md:w-[70%] min-h-[5rem] flex items-center justify-center`}>
                        <h1 className={`md:text-[7rem] font-allura font-thin text-[#000] xs:text-7xl text-center`}>Bashorun Dolapo</h1>
                        <img className={`md:w-[5rem] md:visible xs:invisible xs:w-[0rem]`} alt='' src='/icons/verified.jpg' />
                    </div>
                    <h3 className={`md:text-xl font-normal my-[1rem] xs:text-lg text-[#00000080] text-center`} >
                        <Typewriter
                            options={{
                                // strings: ["Web/Mobile Developer", "Web3 Jedi", "I/O Enthusiast", "Technical Writer"],
                                strings: ["Mobile Developer", "Technology Enthusiast", "Go Getter", "Technical Writer"],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </h3>
                    {/* <p className={`md:text-xl font-normal my-[1rem] xs:text-base text-[#000000] text-center`}>Pleased to have you here! I build and write about cool stuff, and you should check out...</p> */}


                    <div className={`md:my-[1rem]`}>
                        <Link href="/#about">
                            {/* <button className={`md:w-[13em] bg-[#1DB954] h-[2.5em] rounded-md text-white md:mx-[1.9rem] xs:w-[47vw] xs:mx-1 hover:scale-[105%] duration-[500ms]`}>My Portfolio</button> */}
                            <button className={`md:w-[13em] bg-[#000] h-[2.5em] rounded-md text-white md:mx-[1.9rem] xs:w-[47vw] xs:mx-1 hover:scale-[105%] duration-[500ms]`}>About Me</button>
                        </Link>

                        <Link href={resumeLink} passHref={true}>
                            <button className={`md:w-[13em] border-[2px] border-[black] bg-[#66d47e02] h-[2.5em] rounded-md text-[#000] font-bold md:mx-[1.9rem] xs:w-[47vw] xs:mx-1 hover:scale-[105%] duration-[500ms]`}>My Resume</button>
                            {/* <button className={`md:w-[13em] bg-[#4b4f56] h-[2.5em] rounded-md text-white md:mx-[1.9rem] xs:w-[47vw] xs:mx-1`}>My Resume</button> */}
                        </Link>
                    </div>

                    <div className={`my-[1rem] h-12 w-96 md-[98%] flex items-center justify-center mt-10`}>
                        <Link href="https://www.linkedin.com/in/bashorun-dolapo-8b5164225/" passHref={true}>
                            <img className={`w-10 rounded-xl mx-3 cursor-pointer`} alt='' src='/icons/linkedin.webp' />
                        </Link>
                        <Link href="https://github.com/codebydolapo" passHref={true}>
                            <img className={`w-10 rounded-xl mx-3 cursor-pointer`} alt='' src='/icons/git.png' />
                        </Link>
                        <Link href="https://twitter.com/the_transistorr" passHref={true}>
                            <img className={`w-10 rounded-xl mx-3 cursor-pointer`} alt='' src='/icons/twitter.png' />
                        </Link>
                        <Link href="https://web.facebook.com/bashorun.dolapo.3" passHref={true}>
                            <img className={`w-10 rounded-xl mx-3 cursor-pointer`} alt='' src='/icons/facebook.png' />
                        </Link>
                        <Link href="https://www.instagram.com/_0xdolapo/" passHref={true}>
                            <img className={`w-10 rounded-xl mx-3 cursor-pointer`} alt='' src='/icons/instagram.png' />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Intro