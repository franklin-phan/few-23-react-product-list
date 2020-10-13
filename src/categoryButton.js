import React from 'react';
import { CategoriesUnique } from './data';

function CategoryButton(props){
    const { category,onClick } = props
    return (
        <button onClick={onClick}> { category } </button>
        )
}

export default CategoryButton