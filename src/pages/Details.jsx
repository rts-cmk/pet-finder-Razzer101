import { useNavigate, useLoaderData, useParams } from "react-router";
import { PiGenderIntersex, PiPawPrint } from "react-icons/pi";
import { LuMapPin } from "react-icons/lu";

export default function Details(){

    const params = useParams()
    const pets = useLoaderData()
    const petData = pets[params.petId - 1]
    const navigate = useNavigate()

    return(
        <section className="pet-details">
            <img className="pet-details__img" src={petData.image} alt={petData.breed} />
            <article className="details-info">
                <h2 className="details-info__title">{petData.breed}</h2>
                <p className="details-info__location"><LuMapPin/>{petData.location}</p>
                <ul className="details-extra-info">
                    <li className="details-extra-info__breed">
                        <div><PiPawPrint/></div>
                        <p>{petData.breed}</p>
                    </li>
                    <li className="details-extra-info__gender">
                        <div><PiGenderIntersex /></div>
                        <p>{petData.gender}</p>
                    </li>
                </ul>
                <p className="details-info__description">{petData.long_description}</p>
                <button onClick={() => navigate("/")} className="details-info__home" to="/">Back</button>
            </article>
        </section>
    )
}