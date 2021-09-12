import React from 'react'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import '../../styles/FileCard.css'
const FileCard = ({name}) => {
    return (
        <div className="fileCard">
            <div className="fileCard__top">
                    <InsertDriveFileIcon  style={{fontSize:130}}/>
            </div>
            <div className="fileCard__bottom">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default FileCard
