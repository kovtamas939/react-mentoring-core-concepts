import React, { useState } from 'react'
import Item from './Item/Item'

import './GenreToggle.css'

const GenreToggle = () => {
    const [activeFilter, setFilter] = useState('All');

    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime']

    const handleFilterOnClick = (e) => {
        setFilter(e.target.innerHTML)
    };

    return (
        <ul className="Genre-list">
            {genres.map((item, index)  => (
                <Item 
                    onClick={handleFilterOnClick}
                    activeFilter={activeFilter}
                    itemName={item}
                    key={index} >
                </Item>
            ))}
        </ul>
    )
}

export default GenreToggle