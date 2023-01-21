import React from 'react'
import classes from './ProductsComp.module.css'

function ProductsComp(props) {

  return (
    <div className={classes.products}>
        <p className={classes.name}>Название: {props.name}</p>
        <p className={classes.price}>Цена: {props.price}</p>
    </div>
  )
}

export default ProductsComp