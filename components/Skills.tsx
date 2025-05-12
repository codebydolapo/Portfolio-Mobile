const SkillCard = () => {
    return (
        <div className="w-[15rem] h-[20rem] border-2 border-black rounded-lg m-2"></div>
    )
}





const Skills = () => {
    return (
        <div className={`md:min-w-[100%] md:min-h-[100vh] md:h-[100vh] md:mb-0 flex md:flex-row md:border-b-0 pb-5 items-center xs:justify-center xs:min-h-[110vh] xs:h-auto xs:mb-[2rem] xs:flex-col-reverse xs:border-b-[1rem] xs:border-black`} id='skills'>
            <div className={`w-full h-full flex flex-col border-b-2 mt-[3rem]`}>
                <div className={`w-full h-[3rem] flex flex-row items-center justify-start px-5 border-b-2 border-grey md:pl-10 xs:pl-2 `}>
                    <h1 className={`md:text-3xl font-extrabold xs:text-xl text-[#000000] underline`}>My Skills</h1>
                </div>
                <div className="w-full h-full border-2 border-black flex flex-wrap items-center justify-center">
<SkillCard/>
<SkillCard/>
<SkillCard/>
<SkillCard/>
<SkillCard/>
<SkillCard/>
<SkillCard/>
<SkillCard/>
<SkillCard/>
<SkillCard/>
<SkillCard/>
<SkillCard/>
                </div>
            </div>
        </div>
    )
}

export default Skills