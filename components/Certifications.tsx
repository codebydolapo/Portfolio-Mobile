import certifications from "../data/certifications"
import Link from "next/link"

function Slider({ title, image, date, verification, issuer }: any) {
    return (
        <Link href={verification} passHref={true}>
            <div className={`md:w-[19rem] md:h-[26rem] hover:scale-[105%] flex flex-col items-center justify-between rounded-xl shadow-2xl inset-2 md:mx-3 my-5 xs:w-[47vw] xs:h-[40vh] xs:mx-1 cursor-pointer`}>
                <div className={`md:w-[18rem] md:h-[18rem] flex items-center justify-center rounded-lg xs:w-[45vw] xs:h-[45vw]`}>
                    <img className={`w-full`} alt='' src={image} />
                </div>
                <div className={`w-full md:h-[7rem] flex flex-col items-start justify-between rounded-lg px-2 xs:h-[9rem]`}>
                    <p className={`text-[#1DA1F2] my-1 md:text-lg font-bold xs:text-base`}>{title}</p>
                    <p className={`text-black my-1 md:text-base xs:text-xs`}>From {issuer}</p>
                    <div className={`w-full h-[2rem] flex items-center justify-between rounded-lg`}>
                        <p className={`text-black my-1 text-xs`}>{date}</p>
                        <Link href={verification} passHref={true}>
                            <div className={`w-[5rem] h-[1.5rem] flex items-center justify-around rounded-lg bg-gray-100 cursor-pointer`}>
                                <p className={`text-[#1DA1F2] my-1 md:text-xs font-bold xs:text-[0.7rem]`}>Verify</p>
                                <img className={`w-4 rounded-full`} alt='' src='/icons/verify.jpg' />
                            </div>
                        </Link>
                    </div>

                </div>

            </div>
        </Link>
    )
}

function Certifications() {


    return (
        <div className={`md:min-w-[100%] md:min-h-[100vh] h-[100vh] md:mb-0 flex flex-row items-center xs:justify-center xs:min-h-[110vh] xs:h-[110vh] xs:mb-[5rem]`} id='certifications'>
            <div className={`w-full h-full flex flex-col border-b-2 mt-[3rem]`}>
                <div className={`w-full h-[3rem] flex flex-row items-center justify-between px-[0.5rem] border-b-2 border-grey md:pl-10 xs:pl-2`}>
                    <h1 className={`md:text-2xl font-extrabold xs:text-xl text-[#000000] underline`}>Certifications</h1>
                </div>
                <div className={`flex-1 w-full flex flex-col items-center justify-between overflow-x-scroll overflow-y-hidden scrollbar-hidden`}>
                    <h1 className={`md:text-4xl font-extrabold text-[#1DA1F2] my-2`}>WHAT I'M CAPABLE OF...</h1>
                    <div className={`md:w-[65%] xs:w-[98%]`}>
                        <p className={`text-center text-black my-2`}>Here are some of the things I have been up to so far—The skills I have gathered, and some of the technical knowledge I can offer any team.</p>
                    </div>
                    <div className={`md:w-[90%] h-auto object-contain flex-1 flex flex-wrap items-center justify-center xs:w-full`}>
                        {certifications.map(({ title, image, date, verification, issuer }) => {
                            return (
                                <Slider
                                    title={title}
                                    image={image}
                                    date={date}
                                    verification={verification}
                                    issuer={issuer}
                                    key={title}
                                />
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certifications