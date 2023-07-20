import React from 'react'
import './Sidebar.css';
import Category from "./Category/Category";
import Price from './Price/Price';
import Colors from './Colors/Colors'


 function Sidebar({handleChange}) {
  return (
    <section className="sidebar">
        <div className="logo-container">
            <img className='logo-img' src="https://images.indianexpress.com/2021/01/myntra.png?w=414" alt="logo" />
           
        </div>

        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>

    </section>
  )
}
export default Sidebar;
