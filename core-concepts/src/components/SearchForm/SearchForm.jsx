import React, { useState } from 'react'

import './SearchForm.css'

function SearchForm() {
    const [searchValue, setSearchValue] = useState('')

    const updateSearchValue = (event) => {
        setSearchValue(event.target.value);
    };

    const initializeSearchValue = () => {
        setSearchValue('');
      };

    return (
        <div className="Search-form">
            <input 
                type="text" 
                value={searchValue}
                placeholder="Search for nothing"
                onChange={updateSearchValue} />
            <button onClick={initializeSearchValue}>Clear the search form</button>    
        </div>
    )
}

export default SearchForm