function Header()
{
    let name="XYZ";//this is variable 
    let student={ //this s a object
        id:101,
    name:"Nisha"}
    return (
        <div>
        <h1>Header Component{name}</h1>
        <p>Student Id:{student.id}</p>
        <p>Student Name:{student.name}</p>
        </div>
    );
}

export default Header;