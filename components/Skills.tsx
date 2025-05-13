import skills from "../data/skills"

const SkillCard = ({image, title}: any) => {
    return (
        <div className="md:w-[12rem] md:h-[17rem] rounded-lg md:m-4 p-2 flex flex-col shadow-xl xs:m-2 xs:w-[10rem] xs:h-[15rem]">
            <div className="w-full h-[70%] flex items-center justify-center">
                <img className={`w-[80%] `} alt='' src={image} />
            </div>
            <div className="w-full h-[30%] flex items-start justify-start relative">
                <h1 className={`md:text-lg font-bold text-black xs:text-sm`}>{title}</h1>
                <img className={` md:w-6 md:h-6 xs:w-5 absolute bottom-2 right-2`} alt='' src={"/icons/skills/check.png"} />
            </div>
        </div>
    )
}





const Skills = () => {
    return (
        <div className={`md:min-w-[100%] md:min-h-[100vh] md:h-[100vh] md:mb-0 flex md:flex-row md:border-b-0 pb-5 items-center xs:justify-center xs:min-h-[110vh] xs:h-auto xs:mb-[2rem] xs:flex-col-reverse xs:border-b-[1rem] xs:border-black`} id='skills'>
            <div className={`w-full h-full flex flex-col border-b-2 mt-[3rem]`}>
                <div className={`w-full h-[3rem] flex flex-row items-center justify-start px-5 border-b-2 border-grey md:pl-10 xs:pl-2 `}>
                    <h1 className={`md:text-3xl font-extrabold xs:text-xl text-[#000000] underline`}>My Skills</h1>
                </div>
                <div className="w-full h-full flex flex-wrap items-center justify-center">
                    {skills.map(({image, title}: any)=>{
                        return <SkillCard
                        image = {image}
                        title = {title}
                        key = {title}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills