import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import './FastFoodItems.css'

function fastFoodItems({name,price,ingredients,imageUrl,delay}) {
  return (
    <div className='container card product-card h-100 border-0 shadow-sm pb-1 fade-in-horiz' 
    style={{animationDelay : delay + 's'}}
    >
        <span className='badge badge-end badge-shadow bg-success fs-md fw-medium'>
            قیمت : {price} تومان
        </span>
        <div className="card__placeholder">
      <img className='card-img-top' src={imageUrl} alt="" />
        </div>
      <div className="card-body text-center pt-3 pb-4 d-flex flex-column">
        <h5 className="mb-2">{name}</h5>
        <div className="fs-ms fw-bold text-muted mb-3">
            {ingredients}
        </div>
        <button className='btn btn-outline-success btn-sm w-100 mt-auto fw-bold'>
            <FaCartPlus className='fs-5 ms-3'/>
            افزودن به سبد خرید


        </button>

      </div>
      
    </div>
  )
}

export default fastFoodItems
