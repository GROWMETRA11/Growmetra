
import Link from "next/link"
import Logo from "./logo"



export default function AuthHeader() {

    return (
        <header className="w-full">
            {/* Top Bar */}
            <div className="grid grid-cols-3 px-4">
                <div className="bg-[#e9e9e9] border-t-4 border-[#4d8c40]"></div>
                <div className="bg-[#e9e9e9] border-t-4 border-[#C5CE38]"></div>
                <div className="bg-[#e9e9e9] border-t-4 border-[#EEC044]"></div>
            </div>
            <div className="bg-[#e9e9e9] py-3">
                <div className="container mx-auto px-4 flex ">
                    {/* Logo */}
                    <div className="mt-4  lg:mb-0">

                        <Logo
                        height={100}
                        width={100} />
                    </div>

                </div>
            </div>

        </header>
    )
}
