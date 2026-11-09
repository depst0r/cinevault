
export const instant = false

export default async function Movie({
    params 
} : {
    params: Promise<{id?: string}>
}) {

    const { id } = await params

    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)

    const data = await res.json()

    return (
        <h1>{data.name}</h1>
    )
}