import { useNavigate } from "react-router"

export default function Filter(){

    const filters = ["cats", "dogs", "birds", "other"]

    const navigate = useNavigate()

    const handleClick = (elm) => {
        localStorage.setItem("animal", `${elm}`)
        navigate(`/${elm}`)
    }

    return(
        <section className="filter">
            {
                filters.map((elm) => {
                    return <button onClick={() => handleClick(elm)} className="filter__option" key={elm}>{elm}</button>
                })
            }
        </section>
    )
}