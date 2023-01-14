import React,{useState} from "react";

const ItemList2 = ({ items }) => {
    const [visibility, setVisibility] = useState(Array(items.length).fill(false));
  
    const toggleVisibility = (index) => {
      const updatedVisibility =visibility.map((v,i)=>(i===index)? !v:v);
      setVisibility(updatedVisibility);
    }
  
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {visibility[index] ? item : null}
            <button onClick={() => toggleVisibility(index)}>Toggle</button>
          </li>
        ))}
      </ul>
    );
  }


export default ItemList2;