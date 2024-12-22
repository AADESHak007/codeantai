import Subtract from "../assets/Subtract.svg";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Logo from '../assets/codeantLogo.svg'
import LayoutSelfHosted from "../components/LayoutSelfHosted";
import LayoutSaaS from "../components/LayoutSaaS";
import { useState } from "react";

export function Signin() {
    const [isSaaS, setIsSaaS] = useState(true);
    const handleSaaS = () => {
        setIsSaaS(true)
    }
    const handleSelf = () => {
        setIsSaaS(false)
    }

    return (
        <main className="w-full h-screen bg-white flex flex-col lg:flex-row">
            {/* --left-part -- */}
            <section className="left w-full lg:w-[50%] h-full lg:block hidden">
                <div className="container relative w-full h-full border-r-2 border-customGray items-center ">
                    <Card top={24} left={12} />
                    <Card2 top={42} left={24} />
                    <div className="absolute bottom-0 left-0 p-2">
                        <img src={Subtract} alt="" />
                    </div>
                </div>
            </section>

            {/* <--right-part --> */}
            <section className="right w-full lg:w-[50%] h-full flex flex-col bg-[#FAFAFA] justify-center items-center ">
                <main className="w-[94%] h-[70%] p-2 rounded-lg bg-white border border-customGray flex flex-col items-center justify-start">
                    <div className="container w-full h-full text-gray-600">
                        <div className="w-full h-[50%] p-1 text-gray-600 border-b-2 border-customGray" >
                            <section className="upper text-center gap-3 mt-3 flex justify-center items-center">
                                <img src={Logo} className="" />
                                <h1 className='text-lg'>CodeAnt AI</h1>
                            </section>
                            <section className="lower w-full mt-7 text-center">
                                <h1 className="text-2xl text-black font-semibold">Welcome to CodeAnt AI</h1>
                                <div className="w-full h-full mt-5 bg-customGray flex items-center rounded-lg ">
                                    {isSaaS ? 
                                    <>
                                        <button onClick={handleSaaS} className="w-full h-full p-3 text-lg text-white bg-blue-500 font-semibold rounded-lg">SAAS</button>
                                        <button onClick={handleSelf} className="w-full h-full p-3 text-lg font-semibold hover:bg-zinc-400 hover:text-white rounded-lg">Self Hosted</button>
                                    </>
                                    :
                                    <>
                                        <button onClick={handleSaaS} className="w-full h-full p-3 text-lg font-semibold hover:bg-zinc-400 hover:text-white rounded-lg">SAAS</button>
                                        <button onClick={handleSelf} className="w-full h-full p-3 text-white text-lg font-semibold bg-blue-500 rounded-lg">Self Hosted</button>
                                    </>}
                                </div>
                            </section>
                        </div>
                        <div className="w-full h-[50%] mt-3 flex flex-col items-center justify-center">
                            {isSaaS ? <LayoutSaaS /> : <LayoutSelfHosted />}
                        </div>
                    </div>
                </main>
                <h1 className="mt-3 ">By signing up you agree to the <span className="text-md text-black font-bold">Privacy Policy</span></h1>
            </section>
        </main>
    );
}
