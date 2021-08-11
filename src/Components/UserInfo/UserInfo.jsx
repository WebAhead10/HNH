import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./style.css"
const UserInfo = () => {
    return (
        <div className="mainDivUserInfo">
            <AccountCircleIcon className="stam"/>
            {/* take user name from auth || cookies ??? */}
            <p>User Name</p>
        </div>
    )
}

export default UserInfo
