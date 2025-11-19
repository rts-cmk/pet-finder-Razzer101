export default async function favoriteLoader(){
    const ids = JSON.parse(localStorage.getItem("favorites"))

    const promises = ids.map(async id => {
        const url = `http://localhost:4000/dogs/${id}`
        return await fetch(url).then((respons) => respons.json())
    });

    return await Promise.all(promises)
    
}