export default function Loading() {
    return (
        <main className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {
                Array.from({length: 8}).map((_, index)=> (
                    <div
                    key={index}
                    className="bg-slate-800 rounded overflow-hidden flex flex-col animate-pulse">
                        <div className="relative w-full aspect-2/3">
                        <div className="object-cover bg-slate-700"></div>
                        </div>
                    <div className="h-4 bg-slate-700 w-3/4 mx-auto mt-2 rounded"></div>
                    </div>
                ))
            }
        
        </main>         
    )
}