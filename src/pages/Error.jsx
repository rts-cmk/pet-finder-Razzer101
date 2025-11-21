import { Link } from "react-router";

export default function Error(){
    return(
        <section className="error">
            <h2>Nothing on this page</h2>
            <h3>Either an error with the website or you're on the wrong page</h3>
            <Link to="/">Click here to go back to home page</Link>
        </section>
    )
}