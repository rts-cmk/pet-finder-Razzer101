import { useEffect, useState } from "react"
import { Link } from "react-router"
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";

export default function PetSection(){

    const [dogData, setDogData] = useState(null)

    useEffect(() => {
        const fetchFunction = async () => {
            const url = new URL("http://localhost:4000/dogs")
            const response = await fetch(url)
            const data = await response.json()
            setDogData(data)
        }
        fetchFunction()
    },[])

    return(
        dogData !== null &&
        <section className="pet-section">
            {
                dogData.map((elm) => {
                    return(
                        <Link to={"details/" + elm.id} key={elm.id} className="pet-item">
                            <img className="pet-item__img" src={elm.image} alt={elm.breed} />
                            <article className="pet-info">
                                <div className="pet-header">
                                    <h2 className="pet-header__title">{elm.breed}</h2>
                                    <button className="pet-header__favorite-btn"><IoIosHeart /></button>
                                </div>
                                <p className="pet-info__location"><LuMapPin />{elm.location}</p>
                                <p className="pet-info__description">{elm.short_description.slice(0, 51)}...</p>
                            </article>
                        </Link>
                    )
                })
            }
        </section>
    )
}