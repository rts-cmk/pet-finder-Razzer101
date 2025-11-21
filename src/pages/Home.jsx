import { Outlet } from "react-router";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Nav from "../components/Nav";

export default function Home(){

    return(
        <>
            <Intro/>
            <Header/>
            <Filter/>
            <Outlet/>
            <Nav home="#5533EA" homeShadow="inset 5px 5px 10px .1px #57419d3a"/>
        </>
    )
}