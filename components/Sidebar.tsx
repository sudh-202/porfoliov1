import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import { profileData } from '@/constant';

export default function Sidebar() {
    const { socialLinks } = profileData;

    return (

        <aside className="fixed  lg:top-1/2  right-[-28px] lg:right-0 transform lg:-translate-y-1/2 flex flex-col items-center space-y-16 gap-6 ">
          
            <div className="relative flex flex-col items-center lg:gap-6 gap-3">

                <Link href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-2 rounded-full mb-4 relative z-10">
                    <FaFacebookF size={32} />
                </Link>
                <Link href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-2 rounded-full mb-4 relative z-10">
                    <FaTwitter size={32} />
                </Link>
                <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-2 rounded-full mb-4 relative z-10">
                    <FaInstagram size={34} />
                </Link>
                <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-2 rounded-full mb-4 relative z-10">
                    <FaLinkedinIn size={32} />
                </Link>
            </div>
            {/* <div className=" outline-2 border-black"></div> */}
            <div className=" text-2xl transform -rotate-90">FOLLOW ME</div>
        </aside>
    );
}
