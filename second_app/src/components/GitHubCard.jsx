import React, { useEffect,useState } from 'react'
import { data } from 'react-router-dom'

function GitHubCard() {

    let[gitHubData,setGitHubData] =useState({});
    let[repositories,setRepositories]=useState([]);
    let[searchQuery,setSeacrhQuery]=useState("")
    const handleChange=(event)=>{
      setSeacrhQuery(event.target.value);
    }
    useEffect(()=>{
        fetch("https://api.github.com/users/Joeljohndsouza")


.then(data=>data.json())
.then(data=>{
  console.log(data)
    setGitHubData(data);
    fetch(data.repos_url)
    .then(repos=>repos.json())
    .then(repos=>{
      //console.log("Repos"+repos);
      setRepositories(repos);
    })
      
      
     
})

    },[])
  return (
    <div>
        <h1>GitHub profile</h1>
        <div className="card github-card">
    <img src={gitHubData.avatar_url} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Following: {gitHubData.following}</p>
      <p className="card-text">Followers : {gitHubData.followers}</p>
      <a href={gitHubData.html_url}>Click here to visit github profile</a>
      
    
    </div>
   
  </div>
  
  {/*Profile:End */}
  {/*Search*/}
  <input type ="text"onChange={handleChange}/>

  {/*Repostories:Start*/}
  
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Repository Name</th>
      <th scope="col">Reposity Link</th>
      
    </tr>
  </thead>
  <tbody>
  {repositories.filter((repoObj) => {
     return repoObj.name.toLowerCase()
                    .includes(searchQuery.toLowerCase())
                    })
                        .map((repoObj) => {

                            return (<tr>
                                <th scope="row">{repoObj.name}</th>
                                <td><a href={repoObj.html_url}>Click here to visit repo</a></td>

                            </tr>)

                        })}



</tbody>
</table>
</div>




  )
}

export default GitHubCard