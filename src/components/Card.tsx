import Logo from "../assets/codeantLogo.svg";


interface CardProps {
    top: number;
    left: number;
}

const Card = ({ top, left }: CardProps) => {
    return (
        <div className="absolute flex flex-col my-6 bg-white shadow-custom border border-customGrey rounded-lg w-96"
            style={{
                top: `${top}vh`,
                left: `${left}vw`,
            }}
        >
            <section className="upper flex items-center gap-2 p-2  border-zinc-400 border-b ">
                <img src={Logo} alt="ai logo" className="w-6 h-6 object-cover ml-2 object-center" />
                <h1 className="text-md font-semibold m-2">
                    AI to Detect & Autofix Bad Code
                </h1>
            </section>
            <section className="lower mt-2 p-2 flex gap-5 items-center">
                <div className="one text-center">
                    <h1 className="font-semibold text-lg">30+</h1>
                    <h3 className="text-sm font-regular ml-3">Language Support</h3>
                </div>
                <div className="two text-center">
                    <h1 className=" font-semibold text-lg">10K+</h1>
                    <h3 className="text-sm font-regular ml-3" >Developers</h3>
                </div>
                <div className="three text-center">
                    <h1 className=" font-semibold text-lg">100K+</h1>
                    <h3 className="text-sm font-regular ml-3" >Hours Saved</h3>
                </div>
            </section>
        </div>
    );
};

export default Card;
