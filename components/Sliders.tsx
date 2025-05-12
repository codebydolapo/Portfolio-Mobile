import React, { useEffect, useCallback } from 'react'
import { Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'



function Slide({ title, live_link, image }: any) {
    return (
        <Link href={live_link} passHref={true}>
            <div className={`md:h-[15rem] md:min-w-[28rem] md:w-[28rem] my-2 mr-3 flex justify-end items-start flex-col rounded-xl xs:h-[11rem] xs:min-w-[20rem] xs:w-[20rem] hover:scale-[105%]`}>
                <div className={`h-inherit w-full relative rounded-lg overflow-hidden`}>
                    <img className={`h-inherit rounded-lg `} alt='' src={image} />
                    <div className={`absolute w-full bg-black md:h-[4rem] bottom-0 backdrop-filter backdrop-blur-xl bg-opacity-70 border-b border-gray-200 rounded-b-lg p-2 flex flex-col justify-around items-start xs:h-[3rem]`}>
                        <p className={`md:text-sm text-white xs:text-xs`}>{title}</p>

                    </div>

                </div>
            </div>
        </Link>
    )
}




function Sliders({ data, title, id }: any) {

    return (
        <div className={`w-[100%] md:min-h-[120vh] md:h-[110vh] md:border-b-0 md:border-black flex flex-col items-center justify-between md:px-0 xs:min-h-[110vh] xs:h-auto xs:border-b-[1rem] xs:border-black xs:px-2 mt-10`} id={id}>
            <div className={`w-full h-full flex flex-col border-b-2 mt-[3rem]`}>
                <div className={`w-full h-[3rem] flex flex-row items-center justify-start px-5 border-b-2 border-grey md:pl-10 xs:pl-2 `}>
                    <h1 className={`md:text-3xl font-extrabold xs:text-xl text-[#000000] underline`}>{title}</h1>
                </div>
                <div className={`w-full h-[60%] flex md:flex-row xs:flex-col py-2 md:px-5 items-center justify-between xs:px-1`}>
                    <div className={`md:w-[45%] md:h-full flex flex-col items-start justify-center flex-y-2 xs:w-full xs:h-[50%]`}>
                        <div className={`md:w-[80%] flex items-center md:justify-start md:my-1 md:mt-0 xs:w-[98%] xs:mt-5`}>
                            <Clock className={`mr-2 text-black font-bold md:w-[1.5rem] xs:w-[0.7rem]`} />
                            <p className={`text-start text-black my-2 md:text-sm xs:text-[0.6rem]`}>{data[0].publication_date}</p>
                        </div>
                        <div className={`md:w-[80%] flex items-center justify-start md:my-1 xs:w-[98%]`}>
                            <p className={`text-start text-[#1DA1F2] my-2 md:text-4xl font-bold xs:text-lg`}>{data[0].title}</p>
                        </div>
                        <div className={`md:w-[80%] flex flex-col items-start justify-center md:my-1`}>
                            <p className={`text-start text-black my-1 md:text-[0.98rem] tracking-wide xs:text-[0.8rem]`}>{data[0].excerpt1}</p>
                            <p className={`text-start text-black my-1 md:text-[0.98rem] tracking-wide xs:text-[0.8rem]`}>{data[0].excerpt2}</p>
                        </div>
                        <div className={`md:w-[80%] flex items-center justify-start md:my-1 xs:w-[98%]`}>
                            <Link href={data[0].live_link} passHref={true}>
                                <button className={`md:w-[12rem] md:h-[3rem] bg-[#1DA1F2] text-white md:text-sm rounded-lg my-3 xs:w-[12rem] xs:h-[2.5rem] flex items-center justify-center gap-x-2 xs:text-[0.8rem]`}>{id.toLowerCase() == "projects" ? "View On Github" : "Read More"}
                                    {
                                        id.toLowerCase() == "projects" ?
                                            <Image width={25} height={25} src={'/icons/git.png'} color='#000' />
                                            :
                                            <Image width={25} height={25} src={'/icons/medium.png'} color='#000' className='rounded-full' />
                                    }
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className={`md:w-[55%] md:h-full flex items-center justify-center xs:w-full xs:h-[50%] bg-black`}>
                        {/* {id.toLowerCase() == "projects"
                            ?
                            <video className={`h-full object-cover rounded-lg`} autoPlay loop muted>
                                <source src={"/videos/animax_vid.mp4"} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            :
                            <img className={`md:w-auto md:h-full rounded-lg xs:w-full xs:h-auto`} alt="" src={data[0].image} />
                            } */}
                        <img className={`md:w-auto md:h-full rounded-lg xs:w-full xs:h-auto`} alt="" src={data[0].image} />
                    </div>
                </div>
                <div className={`w-full h-[40%] flex flex-row items-center justify-between overflow-x-scroll overflow-y-hidden scrollbar-hidden md:mt-0 md:px-2 xs:px-0 xs:mt-[2rem]`}>
                    {data.map(({ title, image, live_link }: any) => {
                        return <Slide
                            title={title}
                            image={image}
                            live_link={live_link}
                            callToAction={"Read Case Study"}
                            key={title}
                            id={id}
                        />
                    }
                    )}

                </div>
            </div>

        </div>
    )
}

export default Sliders