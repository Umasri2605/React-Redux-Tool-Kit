import React from 'react'
import { useGetAllproductsQuery } from '../../services/productsApi'

function Products() {
var {isLoading,data}=useGetAllproductsQuery();
  return (
    <div className='border  border-1 m-3 p-3 border-primary'>
       <h1>Products Components:</h1> 
       {isLoading && <h5> products Loading......</h5>}
       {!isLoading && (
        <ul className='d-flex flex-wrap list-unstyled justify-content-between'>
            {
                data?.products.map((prod)=>{
                    return(
                    <li>
                      {prod.title}
                      <br></br>
                      <img src={prod.thumbnail} width="200px" alt=""/>
                      </li>
                    );
                })
            }
        </ul>
       )}
    </div>
  )
}

export default Products
