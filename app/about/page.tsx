import { personalInfo, data } from '@/constant';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaBullhorn, FaPalette, FaFilm, FaPen } from 'react-icons/fa';


type ProgrammingSkill = 'WordPress' | 'HTML & CSS' | 'Figma & XD' ;
type LanguageSkillLang = 'English' | 'French' | 'Arabic';

const progressColors: Record<ProgrammingSkill, string> = {
    WordPress: 'bg-green-500',
    'HTML & CSS': 'bg-blue-500',
    'Figma & XD': 'bg-red-500',

};
const progressColorsLang: Record<LanguageSkillLang, string> = {

    'English': 'bg-green-500',
    'French': 'bg-blue-500',
    'Arabic': 'bg-red-500',
};


const serviceIcons: Record<string, JSX.Element> = {
    "Web Development": <FaCode />,
    "App Development": <FaMobileAlt />,
    "Digital Marketing": <FaBullhorn />,
    "UI/UX Design": <FaPalette />,
    "Animation": <FaFilm />,
    "Content Writing": <FaPen />,
};


export default function About() {
    const { about } = personalInfo;

    return (
        <section className="flex flex-col lg:flex-row">
            <div className="w-1/2">
                <Image
                    src="/slider1.webp"
                    alt="Picture of the author"
                    width={500}
                    height={100}
                    className="object-cover w-[700px] h-full"
                />
            </div>

            <div className="flex flex-col  lg:w-1/2  overflow-y-scroll h-screen mt-20 lg:mt-0 ">
                <div className="flex flex-col my-20 gap-10 lg:p-0 p-6">
                    <div className="flex flex-col">
                        <h1 className="lg:text-6xl text-[55px] font-bold flex-wrap lg:leading-[100px] leading-[60px] flex justify-start  w-[30%]">
                            About
                        </h1>
                        <p className="mt-8 text-base sm:text-lg lg:text-2xl flex-wrap flex lg:pr-24 text-[#595959] text-left">{about}</p>
                        <div className='border-b-2 border-black w-[80%] mt-10'></div>
                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-3xl font-semibold flex justify-start">Personal Information</h2>
                        <div className="flex flex-col lg:mt-6 mt-4">
                            <div className="flex lg:flex-row flex-col items-start lg:gap-10">
                                <div className="flex flex-col items-start">
                                    <p className="bold-text lg:text-2xl lg:leading-[34px] text-xl leading-[32px]"><strong>First Name:</strong> {personalInfo.firstName}</p>
                                    <p className="bold-text lg:text-2xl lg:leading-[34px] text-xl leading-[32px]"><strong>Last Name:</strong> {personalInfo.lastName}</p>
                                    <p className="bold-text lg:text-2xl lg:leading-[34px] text-xl leading-[32px]"><strong>Age:</strong> {personalInfo.age} Years</p>
                                </div>
                                <div className="flex flex-col items-start">
                                    <p className="bold-text lg:text-2xl lg:leading-[34px] text-xl leading-[32px]"><strong>Email:</strong> {personalInfo.email}</p>
                                    <p className="bold-text lg:text-2xl lg:leading-[34px] text-xl leading-[32px]"><strong>Phone:</strong> {personalInfo.phone}</p>
                                    <p className="bold-text lg:text-2xl lg:leading-[34px] text-xl leading-[32px]"><strong>Degree:</strong> {personalInfo.degree}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-b-2 border-black w-[80%] mt-10'></div>

                </div>

                <div className=" pr-10">
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="flex-1">
                            <h2 className="text-3xl font-semibold flex justify-start mb-6">Programming</h2>
                            {data.programming.map((item, index) => (
                                <div key={index} className="mb-4">
                                    <div className="flex justify-between">
                                        <span className='text-xl font-semibold mb-4'>{item.name}</span>
                                        <span className='text-xl font-semibold'>{item.percentage}%</span>
                                    </div>
                                    <div className="bg-gray-200 h-2">
                                        <motion.div
                                            className={`h-2 ${progressColors[item.name as ProgrammingSkill]}`}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.percentage}%` }}
                                            transition={{ duration: 2 }}
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex-1 bg-[url('/world-map.webp')]">
                            <h2 className="text-3xl font-semibold flex justify-start mb-6">Language</h2>
                            <div className="flex flex-wrap gap-6">
                                {data.languages.map((item, index) => (
                                    <div key={index} className="relative w-24 h-24">
                                        <svg className="absolute inset-0 w-full h-full">
                                            <circle
                                                className="text-gray-200"
                                                strokeWidth="4"
                                                stroke="currentColor"
                                                fill="transparent"
                                                r="36"
                                                cx="50%"
                                                cy="50%"
                                            />
                                            <motion.circle
                                                className={`h-2 ${progressColorsLang[item.name as LanguageSkillLang]}`}
                                                strokeWidth="4"
                                                strokeDasharray="226"
                                                strokeDashoffset="226"
                                                strokeLinecap="round"
                                                stroke="currentColor"
                                                fill="transparent"
                                                r="36"
                                                cx="50%"
                                                cy="50%"
                                                initial={{ strokeDashoffset: 226 }}
                                                animate={{ strokeDashoffset: 226 - (226 * item.percentage) / 100 }}
                                                transition={{ duration: 2 }}
                                            />
                                        </svg>
                                        <div className="flex items-center justify-center h-full">
                                            <span className="text-2xl font-semibold">{item.percentage}%</span>
                                        </div>
                                        <span className="  text-xl font-semibold flex justify-center">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='border-b-2 border-black w-[80%] mt-10'></div>
                    <div className="mt-12">
                        <h2 className="text-3xl font-semibold flex justify-start mb-6">Services</h2>
                        <div className="flex flex-wrap gap-6">
                            {data.services.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex-1 min-w-[200px] border p-4 rounded-md transform transition-transform hover:scale-105 hover:shadow-lg flex flex-col items-center"
                                >
                                    <div className="mb-4 text-4xl text-black">{serviceIcons[service.name]}</div>
                                    <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
