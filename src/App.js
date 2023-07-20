import './index.css';
import Navigation from "./Navigation/Nav";
import Products from './Products/Product';
import Recommended from "./Recommended/Recommended";
import Sidebar from './Sidebar/Sidebar';

//Database
import products from './db/data';
import { useState } from 'react';
import Cards from './components/Cards';

function App() {
  const [selectedcategory, setSelectedCategory] = useState(null);
  const[query, setQuery] = useState("");

  //------------input filter----------------
  const handleInputChange = event =>{
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(product => product.title.
    toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  //------------Radio filter----------------
  const handleChange = event =>{
    setSelectedCategory(event.target.value);
  }

  //------------buttons filter----------------
  const handleClick = event =>{
    setSelectedCategory(event.target.value);
  }

  function filteredData(products, selected, query){
    let filteredProducts = products;

    //Filtering Input Items
    if(query){
      filteredProducts=filteredItems
    }

    //Selected filters 
    if(selected){
      filteredProducts = filteredProducts.filter(
        ({category,color,company,newPrice,title})=>
        category===selected || color==selected||
        company===selected ||
        newPrice === selected ||
        title === selected
      );
    }

    return filteredProducts.map(({img, title, star, reviews, newPrice,prevPrice}) =>(
      <Cards
        key={Math.random()}
        img={img}
        title={title}
        star ={star}
        reviews={reviews}
        newPrice = {newPrice} 
        prevPrice ={prevPrice}
      />
    ))


  }


    const result = filteredData(products, selectedcategory, query);



  return<>
    <Sidebar handleChange={handleChange}/>
    <Navigation query={query} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick} />
    <Products result={result}/> 
    
  </> 
  
}

export default App;



// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/anjeljayswal/Advance-Filtering.git
// git push -u origin main