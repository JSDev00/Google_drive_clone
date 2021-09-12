import React from 'react'
import NewFile from './NewFile'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import DeleteIcon from '@material-ui/icons/Delete';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SdStorageIcon from '@material-ui/icons/SdStorage';





import '../../styles/sidebar.css'
import SidebarItems from './SidebarItems';
const index = () => {
    return (
        <div className="sidebar">
            <NewFile/>
                <div className="sidebar_itemsContainer"></div>
                <SidebarItems arrow icon={(< InsertDriveFileIcon/>)} label={'My Drive'} />
                <SidebarItems arrow icon={(< ImportantDevicesIcon/>)} label={'Computer'} />
                <SidebarItems arrow icon={(< PeopleAltIcon/>)} label={'Shared With Me'} />
                <SidebarItems arrow icon={(< QueryBuilderIcon/>)} label={'Recent'} />
                <SidebarItems arrow icon={(< DeleteIcon/>)} label={'Bin'} />
                <SidebarItems arrow icon={(< StarBorderIcon/>)} label={'Starred'} />
               
                <hr/>
                <SidebarItems arrow icon={(< SdStorageIcon/>)} label={'Storage'} />
        </div>
    )
}

export default index
