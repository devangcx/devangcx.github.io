import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        < div className="container mx-auto my-0 border-red-800 border" >
            < Header />
            <Outlet />
            <Footer />
        </div >
    )
}