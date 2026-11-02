export const instant = false

import { SearchMovies } from "@/lib/api"
import Image from "next/image"

export default async function Home(){

    type TVMazeShow = {
        show: {
        id: number;
        name: string;
        image: { medium: string } | null;
    }
}
    const movies = await SearchMovies('Marvel')


    return (
        <main className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {movies && movies.map((item: TVMazeShow) => (
                <div key={item.show.id} className="bg-slate-800 rounded overflow-hidden flex flex-col">
                    <div className="relative w-full aspect-2/3">
                    <Image 
                    src={item.show.image?.medium || 'https://placehold.co/210x295?text=No+Image'} 
                    alt={item.show.name} 
                    fill
                    className="object-cover" 
                />
                    </div>
                <h3 className="text-white mt-2">{item.show.name}</h3>
                </div>
    ))}
    </main>
    ) 
};