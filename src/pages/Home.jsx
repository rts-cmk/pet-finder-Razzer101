import { useLoaderData } from "react-router";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Intro from "../components/Intro";
import PetSection from "../components/PetSection";
import Nav from "../components/Nav";

export default function Home(){

    const pets = useLoaderData()

    return(
        <>
            <Intro/>
            <Header/>
            <Filter/>
            <PetSection petData={pets}/>
            <Nav home="#5533EA" homeShadow="inset 5px 5px 10px .1px #57419d3a"/>
        </>
    )
}