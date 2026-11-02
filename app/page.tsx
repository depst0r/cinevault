export const instant = false

import { SearchMovies } from "@/lib/api"
import Image from "next/image"

export default async function Home({
    searchParams 
} : {
    searchParams: Promise<{q?: string}>
}){

    type TVMazeShow = {
        show: {
        id: number;
        name: string;
        image: { medium: string } | null;
    }
}
    const { q } = await searchParams
    const movies = await SearchMovies(q || 'Marvel')


    return (
        <>
        <div className="p-8 flex items-center justify-center">
            <form action="/" method="get" className="cursor-pointer peer h-full w-full outline-none text-sm text-gray-300 pr-2 placeholder-gray-500">
                <input type="text" name='q' />
                <button type="submit" className="cursor-pointer">Поиск</button>
            </form>
        </div>
        <main className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {movies && movies.map((item: TVMazeShow) => (
                <div key={item.show.id} className="bg-slate-800 rounded overflow-hidden flex flex-col ">
                    <div className="relative w-full aspect-2/3">
                    <Image 
                    src={item.show.image?.medium || 'https://placehold.co/210x295?text=No+Image'} 
                    alt={item.show.name} 
                    fill
                    className="object-cover" 
                />
                    </div>
                <h3 className="text-white mt-2 font-bold text-center">{item.show.name}</h3>
                </div>
    ))}
    </main>
    </>
    ) 
};