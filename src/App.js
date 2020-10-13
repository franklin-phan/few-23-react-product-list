import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import data, {CategoriesWithCounts, CategoriesUnique, CategoriesObjectList} from './data.js'
import Product from './products'
import CategoryButton from './categoryButton'

function App() {
  // const { currentCategory, setCategory } = useState(){ currentCategory: 'stuff', setCategory:'anything'}
  const [ currentCategory, setCategory ] = useState('all')//['all',() => {}]

  return (
    <div className="App">
      <h1> { currentCategory }</h1>
          { CategoriesUnique.map((category) =>
            {return (<CategoryButton
              category={category}
              onClick={() => {
                return setCategory(category)
              }}/>)
            })}
          
          <div className="products">
            { data.filter((data) => {return data.category === currentCategory || currentCategory === 'all' }).map((data) => 
            { return (<Product
              name={ data.name}
              price={ data.price}
              category={ data.category}
              />)
            })}
          </div>
         
    </div>
    
  );
  
}


export default App;
