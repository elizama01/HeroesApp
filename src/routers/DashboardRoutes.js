import { DcScreen } from "../components/dc/DcScreen"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { Navbar } from "../components/ui/NavBar"
import { Routes, Route } from "react-router-dom";
import { HeroScreen } from "../components/hero/HeroScreen";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    {/* Ruta para el Hero */}
                    <Route path="hero/:heroeid" element={<HeroScreen />} />
                    <Route path="/" element={<MarvelScreen />} />

                </Routes>
            </div>
        </>
    )
}
