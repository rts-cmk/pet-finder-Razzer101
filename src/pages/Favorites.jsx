import { useLoaderData } from "react-router"
import Header from "../components/Header"
import Filter from "../components/Filter"
import FavoritesSection from "../components/FavoritesSection"
import Nav from "../components/Nav"

export default function Favorites(){
    const petFavorites = useLoaderData()
    
    return(
        <>
            <Header/>
            <Filter/>
            <FavoritesSection favoriteData={petFavorites}/>
            <Nav favorite="#5533EA" favoriteShadow="inset 5px 5px 10px .1px #57419d3a"/>
        </>
    )
}