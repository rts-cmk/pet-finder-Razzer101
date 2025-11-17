import { useState } from "react"

export default function Intro(){

    const [isShowing, setIsShowing] = useState("flex")

    return(
        <section className="intro" style={{display: isShowing}}>
            <img className="intro__img" src="Animal.svg" alt="Picture of a cat" />
            <h1 className="intro__title">My Pets</h1>
            <p className="intro__subtitle">Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue.</p>
            <button onClick={() => setIsShowing("none")} className="intro__skip-btn">Skip</button>
        </section>
    )
}