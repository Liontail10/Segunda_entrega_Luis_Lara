import React from 'react'
import IMG from "../../Imagenes/img01.jpg"


export const ProductoItem = ({

        id, 
        title, 
        price,
        image,
        category,
        cantidad
}) => {
  return (
    <div className='producto'>
    <a href="#">
      <div className='producto__img'>
        <img src= {image} alt={title}/>
      </div>
    </a>
    <div className='producto__footer'>
        <h1>{title}</h1>
        <p>{category}</p>
        <p className='price'>${price}</p>
        <div className='buttom'>
            <button className='btn'>
                Añadir al carrito
            </button>
            <div>
            <a href="#"className='btn'>Vista</a>
            </div>
        </div>  
    </div>
  </div>
  )
}
