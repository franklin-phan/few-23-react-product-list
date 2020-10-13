import React from 'react';
import data from './data.js'


function Product(props){
    const { id,name,category,price,description } = props // Location index
    return (
    <div>
        <h2> { name } </h2>
        <div> { price } </div>
        <div> { category } </div>
    </div>

    )

}

export default Product
