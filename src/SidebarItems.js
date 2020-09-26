import React, {useState} from 'react'
import './sidebarItems.css'

export default function SidebarItems({name, active, handleClick}) {
    return (
        <button 
            className={"sidebarItem ${active ? 'active' : ''}"}
            onClick={handleClick}
        >
        {name}
    </button>
    )
}


