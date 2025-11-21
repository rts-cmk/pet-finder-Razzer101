import { useEffect, useState } from "react";
import { BiSolidHeart, BiHeart } from "react-icons/bi";

export default function FavoriteBtn({elm, animal, save}){

    const handletrigger = () => {

        if(localStorage.getItem(`favorite${animal}${elm.id}`)){
            localStorage.removeItem(`favorite${animal}${elm.id}`)
            
            save((lists) => {
                const newData = lists.filter(item => item.animaltype !== animal || item.favoritenr !== elm.id)
                localStorage.setItem(`favorites`, JSON.stringify(newData))
                return newData
            })
        } else{
            localStorage.setItem(`favorite${animal}${elm.id}`, "true")
            save(lists => {
                const data = lists.some(item => item.animaltype === animal && item.favoritenr === elm.id)

                if (data){
                    return lists
                } else{
                    return [
                        ...lists,
                        { animaltype: animal, favoritenr: elm.id }
                    ];
                }


            })
        }

    }

    return(
        <button onClick={() => handletrigger()}>{localStorage.getItem(`favorite${animal}${elm.id}`) ? <BiSolidHeart /> : <BiHeart />}</button>
    )
}