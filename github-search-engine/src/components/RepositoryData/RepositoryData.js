import React from 'react';
import LanguagesUsed from '../LanguagesUsed/LanguagesUsed';
import RepositoryList from '../../components/RepositoryData/RepositoryList/RepositoryList';

const RepositoryData = (props) => {
    let repoDetails = null;
    if (props.repoData !== null) {
        repoDetails = (
            <div className="repo-data row mt-5">
                {
                    Array.isArray(props.repoData) && props.repoData.length > 0 ?
                        <React.Fragment>
                            <LanguagesUsed repoData={props.repoData} />
                            <RepositoryList repoData={props.repoData} />
                        </React.Fragment>
                        :
                        <div className="text-center w-100 pt-4">
                            <h5>No repository found</h5>
                        </div>
                }
            </div>
        );
    }
    return (
        repoDetails
    );
};

export default RepositoryData