
export async function SearchMovies(query: string) {
  // const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${process.env.OMDB_API_KEY}`)

  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)

  const data = await res.json()

  return data
}