import { useEffect, useState } from "react";
import { BiSolidHeart, BiHeart } from "react-icons/bi";

export default function FavoriteBtn({elm, save}){

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
            
            save((ids) => {
                const newData = ids.filter(number => number !== elm.id)
                localStorage.setItem(`favorites`, JSON.stringify(newData))
                return newData
            })
        } else{
            localStorage.setItem(`favorite${elm.id}`, "true")
            save(ids => ids.some(number => number === elm.id) ? ids : [...ids, elm.id])
        }
    }

    return(
        <button onClick={() => handletrigger()}>{favorite ? <BiSolidHeart /> : <BiHeart />}</button>
    )
}