export const instant = false

import Link from "next/link"


export default async function Movie({
    params 
} : {
    params: Promise<{id?: string}>
}) {

    const { id } = await params

    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)

    const data = await res.json()

    return (

            <main className="min-h-screen bg-slate-900 text-white p-8">
            <Link href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">&larr; Назад к поиску</Link>
            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto items-start">
                <div className="w-full md:w-1/3 shrink-0">
                <img src={data.image?.original || 'https://placehold.co/210x295?text=No+Image'} alt={data.name} className="w-full rounded-xl shadow-2xl object-cover" />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="text-4xl font-bold">{data.name}</h1>
                    <span className="bg-yellow-500 text-black px-2 py-1 rounded font-bold">⭐ {data.rating?.average}</span>
                    <div className="text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: data.summary || 'No summary' }} />
                </div>
            </div>
            </main>
    )
}