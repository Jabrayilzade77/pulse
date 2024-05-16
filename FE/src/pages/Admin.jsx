import React, { useEffect, useState } from 'react'

function Admin() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts()
  }, [])
  
  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/myapp/")
    const data = await res.json()

    setProducts(data)
    
}

  async function deleteProduct(id) {
    const res = await fetch("http://localhost:3000/myapp/"+id,{method:"delete"})
    const data = await res.json()

    getAllProducts()
    
}
deleteProduct
  return (
   <>
   <table>
 <thead>
 <tr>
    <th>id</th>
    <th>name</th>
    <th>price</th>
    <th>option</th>
  </tr>
 </thead>
  <tbody>
  {products.map(x=>(
    <tr>
    <td>{x._id}</td>
    <td>{x.name}</td>
    <td>{x.price}</td>
    <td>
      <button onClick={()=>deleteProduct(x._id)}>delete</button>
    </td>
  </tr>
  ))}
  </tbody>
 
</table>
   </>
  )
}

export default Admin