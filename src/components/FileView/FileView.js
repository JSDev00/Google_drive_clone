import React, { useState, useEffect } from 'react'
import FileItems from './FileItems'
import FileCard from './FileCard';
import '../../styles/FileViews.css'
import { db } from '../../firebase'
const FileView = () => {
    const [files, setFiles] = useState([])
    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])
    return (
        <div className="fileView">
            <div className="fileView__row">
                {
                    files.slice(0,5).map(({id,item})=>(
                        <FileCard name={item.caption}/>
                    ))
                }
               
            </div>
            <div className="fileView__titles">
                <div className="fileView__title__left">
                    <p>Name</p>
                </div>
                <div className="fileView__title__right">
                    <p>Last Modified</p>
                    <p>File Size</p>
                </div>
            </div>
            {/* file view titles */}
            {
                files.map(({ id, item }) => (
                    <FileItems id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
                ))
            }
        </div>
    )
}

export default FileView
