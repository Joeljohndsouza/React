//Logic
const API_LINK="http://localhost:8080/products"
export const getProduct=()=>{
  return fetch (API_LINK)
  .then(data=>data.json())
  .then(data=>data["_embedded"]["products"])
}

export const addProduct=(product)=>{
return fetch (API_LINK,{
  method:"POST",
  headers:{"Content-Type":"application/json"

  },body:JSON.stringify(product)}).then(data=>data.json()).then(data=>data)

}


