import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div> 
            <Navbar />
            <div className="overflow-auto">
                <Outlet/>
            </div>
        </div>
    )
}