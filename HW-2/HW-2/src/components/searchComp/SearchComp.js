import React from 'react'
import classes from './SearchComp.module.css'

function SearchComp() {
  return (
    <div>
        <p className={classes.title}>Товары:</p>
        <input className={classes.input}></input>
    </div>
  )
}

export default SearchComp