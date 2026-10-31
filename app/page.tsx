export const instant = false

import { SearchMovies } from "@/lib/api"

export default async function Home(){
    const movies = await SearchMovies('Marvel')

    console.log(movies)

    return (
        <main className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {movies && movies.map((item: any) => (
                <div key={item.show.id} className="bg-slate-800 p-2 rounded">
                <img 
                    src={item.show.image?.medium} 
                    alt={item.show.name} 
                    className="w-full rounded" 
                />
                <h3 className="text-white mt-2">{item.show.name}</h3>
                </div>
    ))}
    </main>
    ) 
};