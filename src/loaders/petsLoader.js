export default async function petsLoader(){
    const url = new URL("http://localhost:4000/dogs")
    const response = await fetch(url)

    return response.json()
}