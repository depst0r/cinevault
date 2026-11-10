export const instant = false

import Link from "next/link"
import Image from "next/image"

export default async function Movie({
    params 
} : {
    params: Promise<{id?: string}>
}) {

    const { id } = await params

    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)

    const data = await res.json()

    return (
        <div className="min-h-screen bg-slate-900 text-white p-8 max-w-6xl mx-auto flex flex-col gap-8 items-center">
            <Link href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">&larr; Назад к поиску</Link>
            <h1 className="text-4xl font-bold">{data.name}</h1>
            <div className="w-full md:w-1/3 shrink-0">
            <img src={data.image?.original || 'https://placehold.co/210x295?text=No+Image'} alt={data.name} className="w-full rounded-xl shadow-2xl object-cover" />
            <span className="bg-yellow-500 text-black px-2 py-1 rounded font-bold">⭐ {data.rating?.average}</span>
            </div>
        </div>
    )
}