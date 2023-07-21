import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
        <img className='logo-img' src="https://images.indianexpress.com/2021/01/myntra.png?w=414" alt="logo" />
        </div>
        {/* <div> */}
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        {/* </div> */}
        
      </section>
    </>
  );
};

export default Sidebar;
