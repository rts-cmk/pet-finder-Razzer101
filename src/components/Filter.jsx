import { useNavigate } from "react-router"

export default function Filter({ navigation }){

    const filters = ["cats", "dogs", "birds", "other"]
    const navigate = useNavigate()

    return(
        <section className="filter">
            {
                filters.map((elm) => {
                    return <button onClick={() => navigate(`${navigation}${elm}`)} className="filter__option" key={elm}>{elm}</button>
                })
            }
        </section>
    )
}