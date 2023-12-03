import { MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Titlebar() {
    return (
        <div className="filter bg-white bg-opacity-70 h-[60px] -mt-[60px] w-full fixed z-50 flex items-center justify-between px-[10%]" style={{
            backdropFilter: "saturate(180%) blur(20px)"
        }}>
            <span className="font-medium text-xl">EvanZhouDev</span>

            <span className="inline-flex mr-2 h-15 [&>*]:transition-colors">
                <span className="flex items-center mx-3 cursor-pointer hover:text-[#2897FF] text-lg">
                    <MagnifyingGlassIcon className="h-6 w-6 mr-1" /> Search Blog
                </span>
                <span className="flex items-center mx-3 cursor-pointer hover:text-[#2897FF] text-lg">
                    About
                </span>
                <span className="flex items-center mx-3 cursor-pointer hover:text-[#2897FF] text-lg">
                    Tags <ChevronDownIcon className="h-6 w-6 ml-1" /> 
                </span>
            </span>
        </div>
    )
}