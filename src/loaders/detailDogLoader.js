export default async function detailDogLoader({ params }){
    const id = params.petId
    const url = new URL(`http://localhost:4000/dogs/${id}`)

    const response = await fetch(url)

    if(response.status === 404){
        return null
    } else {
        return await response.json()
    }
    
}