export default function Filter(){

    const filters = ["Cats", "Dogs", "Birds", "Other"]

    return(
        <section className="filter">
            {
                filters.map((elm) => {
                    return <p className="filter__option" key={elm}>{elm}</p>
                })
            }
        </section>
    )
}