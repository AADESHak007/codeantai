import { ChangeEvent, useState } from "react"
import Data from '../../data.ts'
import { SlRefresh } from "react-icons/sl"
import { IoAddSharp, IoSearchOutline } from "react-icons/io5"
import { GoDatabase } from "react-icons/go"

const AllRepos = () => {
    const [filterdData, setFilterdData] = useState(Data)

    const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const filtered = Data.filter(item =>
            item.title.toLowerCase().includes(value.toLowerCase()) ||
            item.language.toLowerCase().includes(value.toLowerCase())
        )
        setFilterdData(filtered)
    }
    return (
        <main className="w-full h-[98%] p-2 bg-white rounded-lg">
            <section className="search-bar w-full h-[16%]">
                <div className={`flex justify-between items-center flex-wrap gap-4`}>
                    <div className={`flex flex-col`}>
                        <span className={`font-semibold text-xl`}>Repositories</span>
                        <span className={`font-light text-sm`}>33 total repositories</span>
                    </div>
                    <div className={`flex gap-2`}>
                        <button className={`flex text-xs items-center p-2 px-4 gap-2 rounded-md border`}>
                            <SlRefresh  className={`size-4`}/>
                            Refresh All
                        </button>
                        <button
                            className={`flex text-xs items-center p-2 px-4 gap-2 bg-[#1570EF] text-white rounded-md`}>
                            <IoAddSharp className={`size-4`}/>
                            Add Repository
                        </button>
                    </div>
                </div>
                <div className="p-2 border-b">
                    <label htmlFor={`inputSearch`}
                        className={`border w-fit rounded-md flex gap-2 items-center px-2 py-2`}>
                        <IoSearchOutline className={`size-4 stroke-2`}/>
                        <input id={`inputSearch`} placeholder={`Search Repositories`}
                            onChange={handleFilter}
                            className={`text-xs w-[200px] placeholder:text-gray-700 outline-none`} />
                    </label>
                </div>
            </section>
            <section className="repos w-full h-[84%] ">
                {
                    filterdData.length >= 1 ? filterdData.map((item, index) => (
                        <main key={index} className={`w-full h-[14%] flex flex-col p-4 gap-3 hover:bg-gray-100 ${index !== filterdData.length - 1 ? 'border-b' : ''}`}>
                            <section className={`upper flex gap-2 items-center`}>
                                <span>{item.title}</span>
                                <span
                                    className={`bg-[#EFF8FF] border border-[#B2DDFF] text-primary text-xs px-2 rounded-full`}>{item.type}</span>
                            </section>
                            <section className={`lower flex gap-4 md:gap-8 text-sm font-light`}>
                                <span className={`flex items-center gap-2`}>
                                    {item.language}
                                    <span className={`bg-[#1570EF] p-1 rounded-full`}></span>
                                </span>
                                <span className={`flex items-center gap-2`}>
                                    <GoDatabase className={`w-4`}/>{item.size}
                                </span>
                                <span>{item.updatedAt}</span>
                            </section>
                        </main>
                    )) : (
                        <div className={`flex flex-col border-b p-4 gap-3 text-gray-500 text-center`}>
                            Looks like there is no repository to show.
                        </div>
                    )
                }
            </section>

        </main>
    )
}

export default AllRepos


