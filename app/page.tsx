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
                <div key={item.show.id} className="bg-slate-800 p-2 rounded relative h-80">
                <Image 
                    src={item.show.image?.medium || 'https://placehold.co/210x295?text=No+Image'} 
                    alt={item.show.name} 
                    fill
                    className="w-full object-cover rounded" 
                />
                <h3 className="text-white mt-2">{item.show.name}</h3>
                </div>
    ))}
    </main>
    ) 
};