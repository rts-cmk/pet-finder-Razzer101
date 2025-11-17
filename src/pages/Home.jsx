import Filter from "../components/Filter";
import Header from "../components/Header";
import Intro from "../components/Intro";
import PetSection from "../components/PetSection";

export default function Home(){
    return(
        <>
            <Intro/>
            <Header/>
            <Filter/>
            <PetSection/>
        </>
    )
}