function Input({handleChange,value, name,title, color}) {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} value={value} name={name} type="radio"/>
      <span className="checkmark" style={{backgroundColor:color}}></span>{title}
    </label>
  )
}
export default Input;
