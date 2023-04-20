import React from 'react'

const Recipe = (props) => {
    console.log(props.recipe[0])
    const instructions = props.recipe[0].strInstructions
  return (
    <div className=''>{instructions}</div>
  )
}

export default Recipe