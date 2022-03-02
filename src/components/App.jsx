import React, { useState } from "react";

function App() {
  const [inputText, setInputtext] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event){
    const newValue = event.target.value;
    setInputtext(newValue);
    // console.log(newValue);
  }

  function handleClick(event){
    setItems((prevItem)=>{
      return [...prevItem, inputText]
    })
    setInputtext("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
            {items.map((item)=>{
              return <li>{item}</li>
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
