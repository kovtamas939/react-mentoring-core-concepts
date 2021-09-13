import React, { useState } from 'react'
import Item from './Item/Item'

import './GenreToggle.css'

const GenreToggle = () => {
    const [activeFilter, setFilter] = useState('All');

    const handleFilterOnClick = (e) => {
        setFilter(e.target.innerHTML)
    };

    return (
        <ul className="Genre-list">
            <Item 
                onClick={handleFilterOnClick}
                activeFilter={activeFilter}
                itemName='All'>
            </Item>
            <Item 
                onClick={handleFilterOnClick}
                activeFilter={activeFilter}
                itemName='Documentary'>
            </Item>
            <Item 
                onClick={handleFilterOnClick}
                activeFilter={activeFilter}
                itemName='Comedy'>
            </Item>
            <Item
                onClick={handleFilterOnClick}
                activeFilter={activeFilter}
                itemName='Horror'>
            </Item>
            <Item
                onClick={handleFilterOnClick}
                activeFilter={activeFilter} 
                itemName='Crime'>
            </Item>
        </ul>
    )
}

export default GenreToggle