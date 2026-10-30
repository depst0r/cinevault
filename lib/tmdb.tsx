export async function getTrendingMovies() {
  const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=ru-RU', {
        headers: {
            Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN!}`
    }
  })
  const data = await res.json()
  return data.results
} 