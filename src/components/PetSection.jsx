import { Link } from "react-router"
import { LuMapPin } from "react-icons/lu";
import FavoriteBtn from "./FavoriteBtn";
import { useState } from "react";

export default function PetSection({ petData }){

    const [savefavorite, setSaveFavorite] = useState(JSON.parse(localStorage.getItem("favorites")) || [])
    localStorage.setItem("favorites", JSON.stringify(savefavorite))

    return(
        <section className="pet-section">
            {
                petData.map((elm) => {
                    return(
                        <div key={elm.id} className="pet-box">
                            <div className="pet-box__favorite-btn">
                                <FavoriteBtn elm={elm} save={setSaveFavorite}/>
                            </div>
                            <Link to={"details/" + elm.id} className="pet-item">
                                <img className="pet-item__img" src={elm.image} alt={elm.breed} />
                                <article className="pet-info">
                                    <div className="pet-header">
                                        <h2 className="pet-header__title">{elm.breed.slice(0, 11)}{elm.breed.length > 11 ? "..." : ""}</h2>
                                    </div>
                                    <p className="pet-info__location"><LuMapPin />{elm.location}</p>
                                    <p className="pet-info__description">{elm.short_description.slice(0, 51)}...</p>
                                </article>
                            </Link>
                        </div>
                    )
                })
            }
        </section>
    )
}