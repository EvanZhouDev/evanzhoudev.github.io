import Image from 'next/image'
import tagColor from 'public/tags.json'

export default function Card({ tags, title, date, image }) {
    return (
        <div className="bg-white flex flex-col animate-scale rounded-xl mx-2 my-2 group w-[35rem] h-[30rem] cursor-pointer relative">
            <div className="h-[60%] rounded-t-xl overflow-hidden">
                <Image
                    src={image}
                    width={"0"}
                    height={"0"}
                    alt="Test"
                    sizes="100vw"
                    className="w-full h-full rounded-t-xl transition-transform group-hover:scale-[105%] duration-[0.5s] object-cover"
                />
            </div>
            <div className="flex flex-col justify-between h-[40%] p-7 py-7">
                <span className="uppercase text-gray-500 font-medium ml-[-4px]">
                    {tags.map(x => 
                        <span key={x} className="rounded-full text-sm text-white p-1 px-2 mx-1" style={{backgroundColor: tagColor[x]}}>{x}</span>
                    )}
                </span>
                <div className="font-bold text-2xl">
                    {title}
                </div>
                <span className="font-medium text-gray-400">
                    {date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
            </div>
        </div>
    )
}