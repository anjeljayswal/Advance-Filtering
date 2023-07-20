import Input from "../../components/Input";
import "./Colors.css"
function Colors(handleChange) {
  return (
    <div className=''>
      <h2 className="sidebar-title color-title">
        Colors
      </h2>

      <label className="sidebar-label-container">
        <input type="text" name="test2" id="" onChange={handleChange} />
        <span className="checkmark all"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <label className="sidebar-label-container">
        <input type="radio"
          onChange={handleChange}
          value="white"
          name="test1"
        />

        <span

          className="checkmark"
          style={{
            background: "white",
            border: "2px solid black",
          }}
        >

        </span>White

      </label>
    </div>


  )
}


export default Colors;