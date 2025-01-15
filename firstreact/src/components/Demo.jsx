import React from "react";

class Demo extends React.Component
{

    render()
    {

        console.log(this)    
           return(
            <div><h1>Class based Component</h1>
            <p>{this.props.message}</p>
            <p>{this.props.year}</p>
            </div>
        )
        ;
    }

}
export default Demo