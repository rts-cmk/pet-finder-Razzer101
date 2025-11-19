import { useNavigate, useLoaderData } from "react-router";
import { PiGenderIntersex, PiPawPrint } from "react-icons/pi";
import { LuMapPin } from "react-icons/lu";
import Error from "./Error";

export default function Details(){

    const petDetails = useLoaderData()
    const navigate = useNavigate()

    if(petDetails === null){
        return <Error/>
    } else{
        return(
            <section className="pet-details">
                <img className="pet-details__img" src={petDetails.image} alt={petDetails.breed} />
                <article className="details-info">
                    <h2 className="details-info__title">{petDetails.breed}</h2>
                    <p className="details-info__location"><LuMapPin/>{petDetails.location}</p>
                    <ul className="details-extra-info">
                        <li className="details-extra-info__breed">
                            <div><PiPawPrint/></div>
                            <p>{petDetails.breed}</p>
                        </li>
                        <li className="details-extra-info__gender">
                            <div><PiGenderIntersex /></div>
                            <p>{petDetails.gender}</p>
                        </li>
                    </ul>
                    <p className="details-info__description">{petDetails.long_description}</p>
                    <button onClick={() => navigate("/")} className="details-info__home" to="/">Back</button>
                </article>
            </section>
        )  
    }

    
}