
export function Card({ children }) {
    return (
        <article className='rounded transition md:hover:scale-110 p-3 hover:bg-slate-500 border border-slate-950 flex-grow'>
            {children}
        </article>
    )
}
