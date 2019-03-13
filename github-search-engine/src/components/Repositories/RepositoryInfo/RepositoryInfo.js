import React from 'react';
import moment from 'moment';

const getFromattedDate = (d) => {
    return moment(d).format("MMMM Do YYYY, h:mm:ss a")
};

const RepositoryInfo = (props) => {
    return (
        props.userRepo.map(repoData => {
            return (
                <div className="repository-info col-md-5 m-2 p-3">
                    <div className="repo-name">
                        <span className="name">{repoData.name}</span><br />
                        <span className="full-name">{repoData.full_name}</span>
                    </div>
                    <div className="repo-language-info row mt-4">
                        <div className="language col-md-4">
                            <span className="dot"></span>
                            <span className="pl-1">{repoData.language}</span>
                        </div>
                        <div className="repo-info col-md-7 row ml-2">
                            <div className="p-1 border">{repoData.forks} Forks</div>
                            <div className="p-1 border">{repoData.watchers} Watchers</div>
                            <div className="p-1 border">{repoData.stargazers_count} Stars</div>
                        </div>
                    </div>
                    <div className="repo-lastUpdated mt-4">
                        {"Updated on  " + getFromattedDate(repoData.pushed_at)}
                    </div>
                </div>
            );
        })
    );
};

export default RepositoryInfo;