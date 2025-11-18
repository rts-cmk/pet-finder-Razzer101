import { useNavigate } from "react-router";
import { BiHeart, BiMessageRounded, BiHomeAlt } from "react-icons/bi";
import { GoPerson } from "react-icons/go";

export default function Nav({home = "#BDBDBD", homeShadow, chat = "#BDBDBD", chatShadow, favorite = "#BDBDBD", favoriteShadow, profile = "#BDBDBD", profileShadow}){
    
    const navigate = useNavigate()

    return(
        <nav className="navigation">
            <button onClick={() => {navigate("/")}} style={{color: home, boxShadow: homeShadow}} className="navigation__route" ><BiHomeAlt/></button>
            <button onClick={() => {navigate("/")}} style={{color: chat, boxShadow: chatShadow}} className="navigation__route" ><BiMessageRounded/></button>
            <button onClick={() => {navigate("/")}} style={{color: favorite, boxShadow: favoriteShadow}} className="navigation__route" ><BiHeart/></button>
            <button onClick={() => {navigate("/")}} style={{color: profile, boxShadow: profileShadow}} className="navigation__route" ><GoPerson/></button>
        </nav>
    )
}