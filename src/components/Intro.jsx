import { useState } from "react"

export default function Intro(){

    const [isShowing, setIsShowing] = useState(true)

    if(isShowing === false){
        localStorage.setItem("intro", "false")
    }

    if(isShowing === false || localStorage.getItem("intro")){
        return
    } else {
        return(
            <section className="intro">
                <img className="intro__img" src="animal.svg" alt="Picture of a cat" />
                <h1 className="intro__title">My Pets</h1>
                <p className="intro__subtitle">Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue.</p>
                <button onClick={() => setIsShowing(false)} className="intro__skip-btn">Skip</button>
            </section>
        )
    }

}