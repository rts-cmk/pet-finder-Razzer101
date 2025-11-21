export default async function catLoader({ dogs }){
    const url = new URL("http://localhost:4000/cats")
    const response = await fetch(url)

    return response.json()
}