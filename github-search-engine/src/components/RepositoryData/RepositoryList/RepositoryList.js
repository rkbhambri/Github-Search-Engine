import React from 'react';
import RepositoryItem from './RepositoryItem/RepositoryItem';

const RepositoryList = (props) => {
    return (
        <div className="repositories-wrapper col-md-8 ml-5">
            <h3 className="pl-3">Repositories</h3>
            {
                props.repoData.length !== 0 &&
                <div className="repository-info-wrapper row p-2">
                    <RepositoryItem repoData={props.repoData} />
                </div>
            }

        </div>
    );
};

export default RepositoryList;
