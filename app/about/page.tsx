
import { personalInfo, profileData } from '@/constant';
import Image from 'next/image';

export default function Home() {
    const { about } = personalInfo;


    return (

        <section className='text-center  flex lg:flex-row flex-col lg:gap-20 '>
            <Image
                src="/slider1.webp"
                alt="Picture of the author"
                width={1900}
                height={1000}
                className=""

            />


            <div className='flex flex-col my-20 gap-10 lg:p-0 p-6'>
                <div className='flex flex-col'>
                    <h1 className=" lg:text-6xl text-[55px] font-bold flex-wrap lg:leading-[100px] leading-[60px]  flex justify-start border-b-4 border-black w-[30%]">
                        About
                    </h1>
                    <p className="mt-8 text-base sm:text-lg lg:text-2xl flex-wrap flex  lg:pr-24 text-[#595959]">{about}</p>
                </div>

                <div className=' flex   flex-col'>
                    <h2 className="lg:text-4xl text-3xl font-semibold flex justify-start">Personal Information </h2>
                    <div className="flex flex-col   lg:mt-10 mt-4">

                        <div className="flex lg:flex-row flex-col items-start lg:gap-10">
                            <div className='flex flex-col  items-start'>
                                <p className="bold-text lg:text-2xl lg:leading-[34px]  text-xl leading-[32px]"><strong>First Name:</strong> {personalInfo.firstName}</p>
                                <p className="bold-text lg:text-2xl lg:leading-[34px]  text-xl leading-[32px]"><strong>Last Name:</strong> {personalInfo.lastName}</p>
                                <p className="bold-text lg:text-2xl lg:leading-[34px]  text-xl leading-[32px]"><strong>Age:</strong> {personalInfo.age} Years</p>
                            </div>
                            <div className="flex flex-col  items-start">
                                <p className="bold-text lg:text-2xl lg:leading-[34px]  text-xl leading-[32px]"><strong>Email:</strong> {personalInfo.email}</p>
                                <p className="bold-text lg:text-2xl lg:leading-[34px]  text-xl leading-[32px]"><strong>Phone:</strong> {personalInfo.phone}</p>
                                <p className="bold-text lg:text-2xl lg:leading-[34px]  text-xl leading-[32px]"><strong>Degree:</strong> {personalInfo.degree}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
}
