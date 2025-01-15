import React from 'react'

function CourseItem({id,name,fees}) {
  return (
    <div>
        <p>Cource Id is {id}</p>
        <p>Cource name is {name}</p>
        <p>Cource fees {fees}</p>
        </div>
  )
}

export default CourseItem