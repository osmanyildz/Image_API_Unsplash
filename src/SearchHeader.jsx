import React from 'react';
import './SearchHeader.css';
import { useState } from 'react';

function SearchHeader({search}) {

    const [valueInput, setValueInput] = useState('');
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        search(valueInput);
    }
    const handleChange = (event) => {
      setValueInput(event.target.value);
    }
  return (
    <div>
      <form onSubmit={handleFormSubmit} className='searchForm' >
        <label className='inputText'>Ne Arıyorusnuz?</label>
        <input value={valueInput} onChange={handleChange}/>
        {/* <div>{valueInput}</div> */}
      </form>
    </div>
  )
}

export default SearchHeader

