import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [products, setProducts] = useState([]);

  const { id } = useParams();
  useEffect(() => {
  getById();
    
}, [])

async function getById() {
    const res = await fetch("http://localhost:3000/myapp/" + id);
    const data = await res.json();
    
    setProducts(data);
}

  return (
    <>
      <div>{products.name}</div>
      <div>{products.price}</div>
    </>
  );
}

export default Detail;
