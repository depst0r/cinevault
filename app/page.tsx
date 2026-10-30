export const instant = false

import { getTrendingMovies } from "@/lib/tmdb";

export default async function Home(){
    const movies = await getTrendingMovies()

    console.log(movies)

    return (
        <main>
            <h1>Movies</h1>
        </main>
    ) 
};