import React, { useState } from 'react';
import './Search.css';

function Search({ onButtonClick }) {

    const [value, setValue] = useState('');

    function onValueChange(value){
        setValue(value);
    }

    return (
        <div className="search">
            <button className="search__button" onClick={() => onButtonClick(value)}>Поиск</button>
            <input type="text" value={value} onChange={(e) => onValueChange(e.target.value)} />
        </div>
    )
}

export default Search;