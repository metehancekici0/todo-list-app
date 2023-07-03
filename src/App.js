
import { useState } from "react";
import "./assets/css/style.css";

function App() {

  const [newItem, setNewItem] = useState("")
  const [items, setItems] = useState([])

  const onChangeFunc = (e) => {
    setNewItem(e.target.value)
  }

  const addItem = () => {

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    }

    setItems(oldItems => [...oldItems, item])
    setNewItem("")


  }
  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }


  return (
    <div className="App">
      <>
        <h1>To-do List App</h1>
        <div className="container">
          <div className="input-box">
            <input type="text" value={newItem} onChange={onChangeFunc} placeholder="add an item" onKeyPress={(e) => {
              if (e.key === 'Enter') {
                addItem()
              }
            }} />
            <button onClick={addItem}>Ekle</button>
          </div>
          <ul className="item-box">
            {
              items?.map((item => {
                return (
                  <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>X</button> </li>
                )
              }))
            }
          </ul>
        </div>
      </>
    </div>
  );
}

export default App;
