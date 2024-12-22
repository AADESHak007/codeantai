import GraphLogo from "../assets/GraphLogo.svg";
import { GoArrowUp } from "react-icons/go";


interface CardProps {
    top: number;
    left: number;
}

const Card2 = ({ top, left }: CardProps) => {
    return (
        <div className="absolute flex flex-col w-[30%] p-2 my-6 bg-white shadow-custom border border-customGrey rounded-lg "
            style={{
                top: `${top}vh`,
                left: `${left}vw`,
            }}
        >
            <section className="upper flex mt-1 p-1  justify-between gap-7 items-center">
                <img src={GraphLogo} alt="graph-logo" className="ml-3" />
                <div className="sub-section p-2 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-1">
                    <GoArrowUp className="text-blue-500 " />
                       <h1 className="text-sm text-blue-500 font-bold">14%</h1>
                    </div>
                    <h3>This week</h3>
                </div>
            </section>
            <section className="lower text-left p-2 ml-2 ">
                <h2 className="text-md font-semibold">Issues Fixed</h2>
                <h1 className="text-lg font-bold">500K+</h1>
            </section>
        </div>
    );
};

export default Card2;
