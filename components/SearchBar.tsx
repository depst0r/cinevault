'use client'
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"


export default function SearchBar() {

    const [userValue, setUserValue] = useState('')

    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push(`/?q=${userValue}`)
        }, 500)
        return () => clearTimeout(timer)
    }, [userValue, router])

    return (
        <div className="p-8 flex justify-center">
            <input 
            className="p-2 w-full max-w-md rounded bg-slate-800 text-white border border-slate-600 outline-none focus:border-blue-500"
            type="text"
            placeholder="Поиск сериала..."
            onChange={e => setUserValue(e.target.value)}
            value={userValue}
            />
        </div>
    )
}