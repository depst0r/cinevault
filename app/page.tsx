export const instant = false

import { SearchMovies } from "@/lib/api"
import Image from "next/image"
import Link from "next/link"

import FilterBar from "@/components/FilterBar"

import SearchBar from "@/components/SearchBar"

export default async function Home({
    searchParams 
} : {
    searchParams: Promise<{q?: string, genre?: string}>
}){

    type TVMazeShow = {
        show: {
        id: number;
        name: string;
        image: { medium: string } | null;
        genres: string[];
    }
}
    const { q, genre } = await searchParams
    const movies = await SearchMovies(q || 'Marvel')

    const filteredMovies = genre ? movies.filter((item: TVMazeShow) => item.show.genres.includes(genre)) : movies 
    
    return (
        <>
        <div className="p-8 flex items-center justify-center">
        <FilterBar q={q}/>
        <SearchBar/>
        </div>
        <main className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredMovies && filteredMovies.map((item: TVMazeShow) => (
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