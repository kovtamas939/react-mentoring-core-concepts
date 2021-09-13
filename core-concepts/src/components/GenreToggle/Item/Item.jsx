import React from 'react'

import './Item.css'

const Item = ({ onClick, activeFilter, itemName }) => {
    const liClassName = activeFilter === itemName ? 'Active-filter' : 'Not-active-filter'

    return <li onClick={onClick} className={liClassName}>{itemName}</li>
}

export default Item