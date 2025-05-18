import React from 'react'
import { getOrder } from '../../../../../react-jonas-project/ultimate-react-course-main/16-fast-react-pizza/final-2-final/src/services/apiRestaurant'
import { useLoaderData } from 'react-router-dom'

function Order() {
  const getOrderSearch=useLoaderData()
  return (
    <div>Orderr
      {getOrderSearch.id}
    </div>
  )
}
async function orderLoader({params}) {
const getOrderSearch=await getOrder(params.orderid)
return getOrderSearch
  
}
export default Order
export {orderLoader}
