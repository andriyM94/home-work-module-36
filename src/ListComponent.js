import { useState } from 'react';

import CounterComponent from "./CounterComponent";
import ItemListComponent from './ItemListComponent';

const ListComponent = () => {
  const [input, setInput] = useState('');
  const [item, setItem] = useState([]);
  const [count, setCount] = useState(0);

  const onClickHandler = (input) => {
    if (input.length > 0) {
      const updatedElement = [...item, input];

      setItem(updatedElement);
      setCount(updatedElement.length);
      setInput('');
    } else {
      return;
    }
  }

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onChangeHandler(e);
      onClickHandler(input);
    }
  }

  return (
   <>
    <input onChange={onChangeHandler} onKeyDown={handleKeyDown} value={input} ></input>
      <CounterComponent count={count}/>
    <ul>
        {item.map((element, index) => (
          <ItemListComponent element={element} key={index}/>
        ))}
    </ul>
    <button onClick={() => onClickHandler(input)}>Add new ToDo</button>
   </>
  );
}

export default ListComponent;