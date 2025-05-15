const API_URL="https://react-fast-pizza-api.onrender.com/api"



async function fetchMenuData(){
    const response=await fetch(`${API_URL}/menu`)
    if(!response.ok){
        throw Error ("filed getting menu")
    }
    const {data}=await response.json()
    return data

}











export {fetchMenuData}