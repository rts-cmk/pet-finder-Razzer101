import { Link, useLoaderData, useRevalidator } from "react-router"
import { LuMapPin } from "react-icons/lu";
import FavoriteBtn from "./FavoriteBtn";
import { useEffect, useState } from "react";
import favoriteDogLoader from "../loaders/favoriteDogLoader";
import favoriteCatLoader from "../loaders/favoriteCatLoader";

export default function FavoritesSection({ animal }){

    const petFavorites = useLoaderData()
    const revalidator = useRevalidator();

    const [savefavorite, setSaveFavorite] = useState(JSON.parse(localStorage.getItem("favorites")) || [])
    localStorage.setItem("favorites", JSON.stringify(savefavorite))

    useEffect(() => {
        favoriteDogLoader()
        favoriteCatLoader()
        revalidator.revalidate()
    },[savefavorite])

    return(
        <section className="pet-section">
            {
                petFavorites.map((elm) => {
                    return(
                        <div key={elm.id} className="pet-box">
                            <div className="pet-box__favorite-btn">
                                <FavoriteBtn elm={elm} animal={animal} save={setSaveFavorite}/>
                            </div>
                            <Link to={`/details/${animal}/${elm.id}`} className="pet-item">
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