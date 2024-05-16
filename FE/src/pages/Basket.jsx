import React, { useContext } from 'react'
import { MainContext } from '../context/MainProvider'

function Basket() {

 const {basket,addBasket,decBasket,removeProduct} =  useContext(MainContext)
  return (
    <>
     {basket.map((x) => (
        <div key={x._id} style={{border:"1px solid black",maxWidth:"300px"}}>
          <div>{x.name}</div>

          <div>
            {" "}
            with wild mushrooms and asparagus -----------------------------{" "}
            {x.price} $
          </div>
         
          <br />
         <div >
          <div>{x.count}</div>
         <button  onClick={()=>addBasket(x)}>+</button>
          <button style={{marginLeft:"10px"}} onClick={()=>decBasket(x)}>-</button>
          <button style={{marginLeft:"10px"}} onClick={()=>removeProduct(x)}>X</button>
         </div>
        </div>
      ))}
    </>
  )
}

export default Basket