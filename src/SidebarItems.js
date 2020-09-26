import React from 'react'
import './sidebarItems.css'

export default function SidebarItems({name}) {
    return (
        <button className="sidebarItem "> {name} </button>
    )
}


