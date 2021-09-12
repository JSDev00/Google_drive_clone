import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import '../../styles/SidebarItems.css'
const SidebarItems= ({arrow,icon,label})=>{
    return (
        <div className="sidebaritems">
            <div className="sidebarItem_arrow">
                {arrow&&(<ArrowRightIcon />)}
            </div>
            <div className="sidebarItem_main">
                    {icon}
                <p>{label}</p>
            </div>
        </div>
    )
}

export default SidebarItems
