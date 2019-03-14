import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import Repositories from '../Repositories/Repositories';

const UserData = (props) => {
    let userDetails = null;
    if (props.isUserNotFound) {
        userDetails = (
            <div className="message text-center pt-5">
                <h2>User not found</h2>
            </div>
        );
    }
    if (!props.isUserNotFound && props.userData !== null && props.userRepo !== null) {
        userDetails = (
            <div className="user-details row mt-5">
                <UserInfo userData={props.userData} />
                <Repositories userRepo={props.userRepo} />
            </div>
        );
    }
    return (
        userDetails
    );
};

export default UserData