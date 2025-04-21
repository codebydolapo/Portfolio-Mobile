import Link from "next/link"



function Footer() {
    return (
        <div className={`w-full h-[7rem] bg-white mt-[5rem] flex flex-col items-center justify-center`} >


            <div className={`h-12 w-full flex items-center justify-center`}>
                <Link href="https://www.linkedin.com/in/bashorun-dolapo-8b5164225/" passHref={true}>
                    <img className={`w-10 rounded-xl cursor-pointer mx-2 hover:scale-[110%]`} alt='' src='/icons/linkedin.webp' />
                </Link>
                <Link href="https://github.com/codebydolapo" passHref={true}>
                    <img className={`w-10 rounded-xl cursor-pointer mx-2 hover:scale-[110%]`} alt='' src='/icons/git.png' />
                </Link>
                <Link href="https://twitter.com/the_transistorr" passHref={true}>
                    <img className={`w-10 rounded-xl cursor-pointer  mx-2 hover:scale-[110%]`} alt='' src='/icons/twitter.png' />
                </Link>
                <Link href="https://web.facebook.com/bashorun.dolapo.3" passHref={true}>
                    <img className={`w-10 rounded-xl cursor-pointer mx-2 hover:scale-[110%]`} alt='' src='/icons/facebook.png' />
                </Link>
                <Link href="https://www.instagram.com/_0xdolapo/" passHref={true}>
                    <img className={`w-10 rounded-xl cursor-pointer mx-2 hover:scale-[110%]`} alt='' src='/icons/instagram.png' />
                </Link>
            </div>




            <p className={`text-center text-black text-xs my-3`}>Designed With ❤ By Yours Truly.</p>

        </div>
    )
}

export default Footer