import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <div className="flex-1 fixed bg-zinc-950 border-gray-700 text-white ">
            <Link to='/'><button className="m-2 border-gray-700 border">Home</button></Link>
            <Link to='/Brickbreaker'><button className="m-2 border-gray-700 border">Brick Breaker</button></Link>
            <Link to='https://vite-react-three-gilt-15.vercel.app'><button className="m-2 border-gray-700 border">Sorting Algorithm Visualizer</button></Link>
        </div>
    )
}