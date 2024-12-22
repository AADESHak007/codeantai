import Logo from "../assets/codeantLogo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronDownSharp, IoCodeSlashOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi";
import { LuBookText, LuLogOut, LuPhone } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";
import { IoIosCloudOutline } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    const [isSideBarVisible, setIsSideBarVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const isMobileRef = useRef(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            const isMobileLocal = width < 768
            if (isMobileLocal) {
                setIsMobile(true)
                isMobileRef.current = true
            } else {
                setIsMobile(false)
                isMobileRef.current = false
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return (
        <div className="flex flex-col w-full md:w-64 bg-white md:h-screen border-r relative">
            <div className={`flex justify-between md:justify-around w-full px-4 items-center`}>
                <Link to='/' className="flex items-center justify-center gap-4 h-16">
                    <img src={Logo} alt={'logo'} className={`w-6`} />
                    <h1 className="text-lg font-semibold">CodeAnt AI</h1>
                </Link>

                <div className={`flex md:hidden`}>
                    <button className={``} onClick={() => { setIsSideBarVisible(prevState => !prevState) }}>
                        <RxHamburgerMenu className={`size-5`} />
                    </button>
                </div>
            </div>

            <div
                className={`absolute md:static bottom-0 w-full h-screen md:h-full bg-black/10 translate-y-full md:translate-y-0 flex overflow-hidden transition-all `}
                style={{
                    height: isMobile ? (isSideBarVisible ? 'calc(100vh - 64px)' : '0px') : '100%',
                }}
            >
                <div
                    className={`bg-white w-full h-fit md:h-full flex flex-col`}>
                    <div className="flex flex-col items-center py-4">
                        <span className="mt-2 text-sm border p-2 rounded-xl flex gap-2 items-center">
                            <span>UtkarshDhairyaPanwar...</span>
                            <IoChevronDownSharp className={`w-5`} />
                        </span>
                    </div>

                    <nav className="flex-1 px-4 py-2 space-y-2">
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm font-medium bg-[#1570EF] text-white rounded-lg"
                        >
                            <span className="flex-shrink-0">
                                <HiOutlineHome className="w-6" />
                            </span>
                            <span className="ml-3 font-semibold text-base">Repositories</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <span className="flex-shrink-0">
                                <IoCodeSlashOutline className="w-6" />
                            </span>
                            <span className="ml-3 font-semibold text-base">AI Code Review</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <span className="flex-shrink-0">
                                <IoIosCloudOutline className="w-6" />
                            </span>
                            <span className="ml-3 font-semibold text-base">Cloud Security</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <span className="flex-shrink-0">
                                <LuBookText className="w-6" />
                            </span>
                            <span className="ml-3 font-semibold text-base">How to Use</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <span className="flex-shrink-0">
                                <SlSettings className="w-6" />
                            </span>
                            <span className="ml-3 font-semibold text-base">Settings</span>
                        </a>
                    </nav>


                    <div className="px-4 py-4">
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <span className="flex-shrink-0"><LuPhone className={`w-5`} /></span>
                            <span className="ml-3 font-bold text-md">Support</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <span className="flex-shrink-0"><LuLogOut className={`w-5`} /></span>
                            <span className="ml-3 font-bold text-md">Logout</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;