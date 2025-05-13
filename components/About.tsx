// import styles from '../styles/about.module.css'
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import Link from "next/link"
import { resumeLink } from "../data/resume"

function About() {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <div className={`md:min-w-[100%] md:min-h-[100vh] md:h-[100vh] md:mb-0 flex md:flex-row md:border-b-0 md:mt-0 pb-5 items-center xs:justify-center xs:min-h-[110vh] xs:h-auto xs:mb-[2rem] xs:flex-col-reverse xs:border-b-[1rem] xs:border-black xs:mt-[8rem] md:px-2`} id='about'>

            <div className={`md:w-[40%] md:h-full overflow-hidden flex items-center justify-center xs:w-[100%] xs:h-[50%]`}>
                <div className={`md:w-[30rem] md:h-[30rem] rounded-full relative xs:w-[98%] xs:h-[50%] `}>
                    <img className={`w-inherit h-inherit rounded-full `} alt='' src='/images/me4.jpg' />
                    {/* <img className={`md:w-[5rem] absolute bottom-5 right-5 rounded-full z-100 xs:w-[3rem]`} alt='' src='/icons/verified.jpg' /> */}
                </div>

            </div>
            <div className={`md:w-[60%] md:h-full flex flex-col items-center justify-center xs:w-[100%] xs:h-[50%]`}>
                <div className={`md:w-[50%] flex flex-col xs:w-[98%]`}>
                    <h1 className={`text-center text-[#1DA1F2] my-2 md:text-4xl font-extrabold xs:text-2xl`}>Welcome!</h1>
                    <p className={`text-center text-black my-2 md:text-lg xs:text-sm`}>My name is <b className="text-[#1DA1F2]">Bashorun Dolapo</b>, and I am a <b className="text-[#1DA1F2]">React-Native developer</b> </p>
                    <p className={`text-center text-black my-2 md:text-lg xs:text-sm`}>I have a burning passion for <b className="text-[#1DA1F2]">building products</b> that help others and solve real world problems.</p>
                    <p className={`text-center text-black my-2 md:text-lg xs:text-sm`}>
                        I have a <b className="text-[#1DA1F2]">keen eye for detail</b> and am looking forward to <b className="text-[#1DA1F2]">meeting user needs</b> with intuitive and user-friendly experiences.</p>
                    {/* <p className={`text-center text-black my-2`}>
                        I am a strong advocate for <b className="text-[#1DA1F2]">collaboration and innovation</b>, and I ensure that products are not only functional, but also delightful to use</p> */}
                    <p className={`text-center text-black my-2 md:text-lg xs:text-sm`}>
                        When I'm not working on delivering great products, I enjoy Walks, Writing, Movies, Music and Weightlifting</p>

                </div>
                <div className={`md:w-[50%] flex items-start justify-around xs:w-[98%]`}>
                    <Link href="https://t.me/CodeByDolapo" passHref={true}>
                        <div className={`md:w-[12rem] md:h-[3rem] md:text-normal flex items-center justify-center bg-[#24A1DE] text-white rounded-lg my-3 xs:w-[48vw] xs:h-[3rem] cursor-pointer hover:scale-[105%] xs:text-sm`}>Let's Discuss!
                            <img className={`w-8 rounded-xl mx-2 cursor-pointer`} alt='' src='/icons/telegram.png' />
                        </div>
                    </Link>
                    <Link href = {resumeLink} passHref={true}>
                        <button className={`md:w-[12rem] md:h-[3rem] md:text-normal border-[1px] border-black text-black rounded-lg my-3 font-bold xs:w-[48vw] xs:h-[3rem] hover:scale-[105%] xs:text-sm`}>Read My Resume</button>
                    </Link>
                </div>
                <div className={`my-[1rem] h-12 w-96 flex items-center justify-center mt-10`}>
                    <Link href="https://www.linkedin.com/in/bashorun-dolapo-8b5164225/" passHref={true}>
                        <img className={`w-10 rounded-xl mx-3 cursor-pointer hover:scale-[110%]`} alt='' src='/icons/linkedin.webp' />
                    </Link>
                    <Link href="https://github.com/codebydolapo" passHref={true}>
                        <img className={`w-10 rounded-xl mx-3 cursor-pointer hover:scale-[110%]`} alt='' src='/icons/git.png' />
                    </Link>
                    <Link href="https://twitter.com/the_transistorr" passHref={true}>
                        <img className={`w-10 rounded-xl mx-3 cursor-pointer hover:scale-[110%]`} alt='' src='/icons/twitter.png' />
                    </Link>
                    <Link href="https://web.facebook.com/bashorun.dolapo.3" passHref={true}>
                        <img className={`w-10 rounded-xl mx-3 cursor-pointer hover:scale-[110%]`} alt='' src='/icons/facebook.png' />
                    </Link>
                    <Link href="https://www.instagram.com/_0xdolapo/" passHref={true}>
                        <img className={`w-10 rounded-xl mx-3 cursor-pointer hover:scale-[110%]`} alt='' src='/icons/instagram.png' />
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default About