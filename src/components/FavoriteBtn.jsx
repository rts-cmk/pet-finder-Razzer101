import { useEffect, useState } from "react";
import { BiSolidHeart, BiHeart } from "react-icons/bi";

export default function FavoriteBtn({elm}){

    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        if(localStorage.getItem(`favorite${elm.id}`)){
            setFavorite(true)
        } else{
            setFavorite(false)
        }
    },[])

    const handletrigger = () => {
        favorite ? setFavorite(false) : setFavorite(true)

        if(localStorage.getItem(`favorite${elm.id}`)){
            localStorage.removeItem(`favorite${elm.id}`)
        } else{
            localStorage.setItem(`favorite${elm.id}`, JSON.stringify(elm))
        }
    }

    return(
        <button onClick={() => handletrigger()}>{favorite ? <BiSolidHeart /> : <BiHeart />}</button>
    )
}