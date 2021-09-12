import React from 'react'
import '../../styles/sideIcons.css'
import AddIcon from '@material-ui/icons/Add';
const index = () => {
    return (
        <div className="sideIcons">
            <div className="sideIcons__top">

            <img src={`https://cdn2.iconfinder.com/data/icons/squareplex/512/google_calendar.png`} />
            <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Google_Keep_icon.svg/1200px-Google_Keep_icon.svg.png`} />
            <img src={`https://cdn2.iconfinder.com/data/icons/metro-ui-dock/512/Google_Tasks.png`} />
            </div>
            <hr/>
            <div className="sideIcon__plusIcon">
                <AddIcon/>
            </div>
        </div>
    )
}

export default index
