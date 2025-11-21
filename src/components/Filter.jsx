import { useNavigate } from "react-router"

export default function Filter(){

    const filters = ["cats", "dogs", "birds", "other"]

    const navigate = useNavigate()

    return(
        <section className="filter">
            {
                filters.map((elm) => {
                    return <button onClick={() => navigate(`/${elm}`)} className="filter__option" key={elm}>{elm}</button>
                })
            }
        </section>
    )
}