import React from 'react'
import projects from '../data/projects'




function Slide({ title, live_link, image, prd_link }: any) {
    return (
        <div className={`h-[21rem] min-w-[30rem] md:w-[30rem] my-2 md:mx-5 flex justify-between items-start flex-col rounded-xl  hover:scale-[102%]`}>
            <div className={`h-[17rem] w-full relative rounded-lg overflow-hidden`}>
                <img className={`h-full rounded-lg `} alt='' src={image} />
                <div className={`absolute w-full bg-black md:h-[4rem] bottom-0 backdrop-filter backdrop-blur-xl bg-opacity-70 border-b border-gray-200 rounded-b-lg p-2 flex flex-col justify-around items-start xs:h-[5rem]`}>
                    <p className={`md:text-sm text-white xs:text-xs`}>{title}</p>

                </div>

            </div>
            <div className={`w-full h-[3rem] flex flex-row`}>
                <button className={`md:w-[9rem] md:h-[2.5rem] bg-[#1DA1F2] text-white md:rounded-lg md:text-sm xs:text-[0.5rem] xs:w-[5rem] xs:h-5  xs:rounded-0 mx-2`}>Live Link</button>
                <button className={`md:w-[9rem] md:h-[2.5rem] bg-[#F01D32] text-white font-bold md:rounded-lg md:text-sm xs:text-[0.5rem] xs:w-[5rem] xs:h-5  xs:rounded-0 mx-2`}>Documentation</button>
            </div>
        </div>
    )
}




function Projects() {
    return (
        <div className={`w-[100%] md:min-h-[110vh] h-[110vh] flex flex-col items-center justify-between`} id="projects">
            
            <div className={`w-full h-full flex flex-col border-b-2 mt-[3rem]`}>
                <div className={`w-full h-[3rem] flex flex-row items-center justify-between px-[0.5rem] border-b-2 border-grey md:pl-10 xs:pl-2`}>
                    <h1 className={`md:text-2xl font-extrabold xs:text-xl text-[#000000] underline`}>Projects</h1>
                </div>
                <div className={`flex-1 w-full flex flex-col items-center justify-between overflow-x-scroll overflow-y-hidden scrollbar-hidden`}>

                    <div className={`w-full h-[48%] flex flex-row `}>
                        {projects.filter((project, index) => index % 2 === 0).map(({ title, image, live_link }) => {
                            return <Slide
                                title={title}
                                image={image}
                                live_link={live_link}
                                callToAction={"Read Case Study"}
                                key = {title}
                            />
                        }
                        )}
                    </div>

                    <div className={`w-full h-[48%] flex flex-row`}>
                        {projects.filter((project, index) => index % 2 === 1).map(({ title, image, live_link }) => {
                            return <Slide
                                title={title}
                                image={image}
                                live_link={live_link}
                                callToAction={"Read Case Study"}
                                key = {title}
                            />
                        }
                        )}
                    </div>


                </div>
            </div>






        </div>
    )
}

export default Projects