import { useEffect,useState } from "react";

function LoggedIn(){
    let [loggedIn,setLoggedIn]= useState(false)

return(
<div>
{false &&<h1>Condition is true</h1>}
<hr/>

    {loggedIn?
   <div>
    <h1>Welcome user</h1>
    <button onClick={()=>{
        setLoggedIn(false);
    }}>Logout</button>
    </div>:

    <button onClick={()=>{
        setLoggedIn(true);
    }}>Log in</button>}

</div>)
    
}
export default LoggedIn