import React from 'react';
import moment from 'moment';
import './RepositoryItem.css'
const getFromattedDate = (d) => {
    return moment(d).format("MMMM Do YYYY, h:mm:ss a")
};

const RepositoryItem = (props) => {
    return (
        props.repoData.map(repoData => {
            return (
                <div className="repo-item w-100 row ml-2 mt-4" key={repoData.id}>
                    <div className="repo-image col-md-3">
                        <img className="user-image" src={repoData.owner.avatar_url} alt="Not Found" />
                    </div>
                    <div className="repo-details p-2">
                        <div className="repo-name">
                            <a href={repoData.html_url} target="_blank" style={{ color: '#25282D' }} rel="noopener noreferrer" >
                                <span className="name">{repoData.name}</span><br />
                                <span className="full-name">{repoData.full_name}</span>
                            </a>
                        </div>
                        <div className="repo-description mt-2">
                            {repoData.description}
                        </div>
                        <div className="repo-language-info row mt-4">
                            <div className="language col-md-4">
                                <span className="dot"></span>
                                <span className="pl-1">{repoData.language}</span>
                            </div>
                            <div className="repo-info col-md-7 row ml-2">
                                <div className="p-1 ml-2 border">{repoData.forks} Forks</div>
                                <div className="p-1 ml-2 border">{repoData.watchers} Watchers</div>
                                <div className="p-1 ml-2 border">{repoData.stargazers_count} Stars</div>
                            </div>
                        </div>
                        <div className="repo-lastUpdated mt-4">
                            {"Updated on  " + getFromattedDate(repoData.pushed_at)}
                        </div>
                    </div>
                </div>
            );
        })
    );
};

export default RepositoryItem;