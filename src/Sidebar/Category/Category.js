import './Category.css'
function Category() {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Sneaker
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Flats
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Sandals
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Heels
        </label>
        
      </div>
    </div>
  )
}

export default Category;