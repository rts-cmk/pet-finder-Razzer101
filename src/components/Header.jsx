import { useEffect, useState } from "react";
import { IoIosPin, IoIosArrowDown, IoMdNotificationsOutline  } from "react-icons/io";

export default function Header(){

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const fetchFunction = async () => {
            const url = new URL("http://localhost:4000/user")
            const response = await fetch(url)
            const data = await response.json()
            setUserData(data)
        }
        fetchFunction()
    },[])

    return(
        userData !== null &&
        <header className="header">
            <img className="header__profile-picture" src={userData.image} alt="Profile Picture" />
            <p className="header__location"><IoIosPin />{userData.location}<IoIosArrowDown /></p>
            <button className="header__notify-btn"><IoMdNotificationsOutline /></button>
        </header>
    )
}