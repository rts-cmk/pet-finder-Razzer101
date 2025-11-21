export default async function favoriteCatLoader(){
    const favorites = JSON.parse(localStorage.getItem("favorites"))

    const favoriteCats = favorites.filter(item => item.animaltype === "cats")

    const promises = favoriteCats.map(async (data) => {
        const url = `http://localhost:4000/cats/${data.favoritenr}`
        return await fetch(url).then((respons) => respons.json())
    });

    return await Promise.all(promises)
    
}