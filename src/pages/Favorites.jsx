import { Outlet, useLoaderData } from "react-router"
import Header from "../components/Header"
import Filter from "../components/Filter"
import Nav from "../components/Nav"

export default function Favorites(){
    
    return(
        <>
            <Header/>
            <Filter navigation="/favorites/"/>
            <Outlet/>
            <Nav favorite="#5533EA" favoriteShadow="inset 5px 5px 10px .1px #57419d3a"/>
        </>
    )
}