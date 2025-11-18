import { Link } from "react-router"
import { BiSolidHeart, BiHeart } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";

export default function PetSection({ petData }){

    return(
        <section className="pet-section">
            {
                petData.map((elm) => {
                    return(
                        <div className="pet-box">
                            <div className="pet-box__favorite-btn">
                                <button><BiSolidHeart /></button>
                            </div>
                            <Link to={"details/" + elm.id} key={elm.id} className="pet-item">
                                <img className="pet-item__img" src={elm.image} alt={elm.breed} />
                                <article className="pet-info">
                                    <div className="pet-header">
                                        <h2 className="pet-header__title">{elm.breed}</h2>
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