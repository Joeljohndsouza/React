import React from 'react'
import { addProduct } from '../services/ProductService'

function ProductForm() {
//Function to be called when form will be submitted
  const submitHandler=(e)=>{
    addProduct({
      productId:e.target.productId.value,
      productName:e.target.productName.value,
      description:e.target.description.value,
      productprice:e.target.productprice.value
    }).then(data=>data)
  }

  return (
    <div className='conainer border border-primary border-3 p-3 my-3'>
    
        <form onSubmit={submitHandler}>
            <h1 className='bg-primary p-2 text-white text center'>Add Product</h1>
            {/*Product Id*/}

     <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Product Id</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    name='productId'/>
    </div>
     
     {/*Product Name*/}
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Product Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    name='productName'/>
    
  </div>

    {/*Product description*/}
    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Product Description</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    name='description'/>
     </div>

   {/*Product Price*/}
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Product Price</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    name='productprice'/>
    
  </div>

    {/*Button to Submit*/}
  <button type="submit" className="btn btn-primary">Submit</button>



        </form>
    </div>
  )
}

export default ProductForm
