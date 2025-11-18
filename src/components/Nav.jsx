import { Link } from "react-router";
import { BiHeart, BiMessageRounded, BiHomeAlt } from "react-icons/bi";
import { GoPerson } from "react-icons/go";

export default function Nav({home = "#BDBDBD", homeShadow, chat = "#BDBDBD", chatShadow, favorite = "#BDBDBD", favoriteShadow, profile = "#BDBDBD", profileShadow}){
    return(
        <nav className="navigation">
            <Link style={{color: home, boxShadow: homeShadow}} className="navigation__route" to="/"><BiHomeAlt/></Link>
            <Link style={{color: chat, boxShadow: chatShadow}} className="navigation__route" to="/"><BiMessageRounded/></Link>
            <Link style={{color: favorite, boxShadow: favoriteShadow}} className="navigation__route" to="/"><BiHeart/></Link>
            <Link style={{color: profile, boxShadow: profileShadow}} className="navigation__route" to="/"><GoPerson/></Link>
        </nav>
    )
}