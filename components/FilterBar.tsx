import Link from "next/link"

export default function FilterBar({ q } : { q?: string }){

    return (
        <div className="flex flex-wrap justify-center gap-2 p-4">
            <Link href={`/?q=${q || ''}`} className="px-4 py-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors text-sm">All Genre</Link>
            <Link href={`/?q=${q || ''}&genre=Action`} className="px-4 py-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors text-sm">Action</Link>
            <Link href={`/?q=${q || ''}&genre=Drama`} className="px-4 py-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors text-sm">Drama</Link>
            <Link href={`/?q=${q || ''}&genre=Comedy`} className="px-4 py-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors text-sm">Comedy</Link>
            <Link href={`/?q=${q || ''}&genre=Science-Fiction`} className="px-4 py-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors text-sm">Science-Fiction</Link>
        </div>
    )
};