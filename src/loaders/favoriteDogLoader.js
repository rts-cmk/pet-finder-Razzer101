export default async function favoriteDogLoader(){
    const favorites = JSON.parse(localStorage.getItem("favorites"))

    const favoriteDogs = favorites.filter(item => item.animaltype === "dogs")

    const promises = favoriteDogs.map(async (data) => {
        const url = `http://localhost:4000/dogs/${data.favoritenr}`
        return await fetch(url).then((respons) => respons.json())
    });

    return await Promise.all(promises)
    
}