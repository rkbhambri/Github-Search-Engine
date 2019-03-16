import React from 'react';

const ContentPlaceholder = (props) => {
    let contentPlaceholder = null;
    if (!props.isUserNotFound && props.userData === null && props.userRepo === null && props.repoData === null) {
        contentPlaceholder = (
            <div className="content-placeholder text-center pt-5">
                <h2>Please Enter search String</h2>
            </div>
        );
    }
    return (
        contentPlaceholder
    );
};

export default ContentPlaceholder