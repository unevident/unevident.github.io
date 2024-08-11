import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <div className="flex-1 bg-zinc-950 border-gray-700 text-white">
            <Link to='/'><button className="m-2 border-gray-700">Home</button></Link>
            <Link to='/Brickbreaker'><button className="m-2 border-gray-700">Brick Breaker</button></Link>
        </div>
    )
}