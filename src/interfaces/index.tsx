import { useState } from "react";

const Interface = () => {
  const [ count, setCount ] = useState(0);

  const handleClickButton = async () => {
    setCount(count + 1);
  }
  
  return (
    <div>
      <button onClick={handleClickButton}>
        click
      </button>
      <div>count: { count }</div>
    </div>
  )
}

export default Interface;