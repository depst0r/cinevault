export const instant = false

import { SearchMovies } from "@/lib/api"
import Image from "next/image"
import Link from "next/link"

import SearchBar from "@/components/SearchBar"

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
        <SearchBar/>
        </div>
        <main className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {movies && movies.map((item: TVMazeShow) => (
                <Link href={`/show/${item.show.id}`} key={item.show.id}>
                    <div className="bg-slate-800 rounded overflow-hidden flex flex-col ">
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
                </Link>
            ))}
        </main>
    </>
    ) 
};