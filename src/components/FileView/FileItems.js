import React from 'react';
import '../../styles/FileItems.css';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
const monthName =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const FileItems = ({id,caption,timestamp,fileUrl,size}) =>{"id"
const fileDate = `${timestamp?.toDate().getDate()} ${monthName[timestamp?.toDate().getMonth()]} ${timestamp?.toDate().getFullYear()}` 

    const getReadableFileSizeString = (fileSizeInBytes)=>{
        let i = -1;
        const byteUnits = [ 'KB', 'MB', 'GB', 'TB'];
        do{
            fileSizeInBytes/=1024;
            i++;
        }while(fileSizeInBytes>1024){
            return Math.max(fileSizeInBytes,0.1).toFixed(1)+byteUnits[i];
        }
    };
    return (
        <div className="fileItem">
            <a href={fileUrl} target="_blank" download >
            <div className="fileItem__left">
                <InsertDriveFileIcon />
                <p>{caption}</p>
            </div>
            <div className="fileItem__right">
                    <p>{fileDate}</p>
                    <p>{getReadableFileSizeString(size)}</p>
            </div>
                </a>
        </div>
    )


}
export default FileItems