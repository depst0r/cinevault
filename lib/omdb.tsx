export async function getTrendingMovies(query: string) {
  const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${process.env.OMDB_API_KEY}`, {
  })

  const data = await res.json()
  
  return data.Search
}