import React from 'react'

const MenuItem = ({pizza}) => {
   const {id,imageUrl,ingredients,name,soldOut,unitPrice}=pizza
  return (
   <li>
    <img src={imageUrl} alt="" />
    <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
            <p>sold out</p>
        </div>
    </div>
   </li>
  )
}

export default MenuItem