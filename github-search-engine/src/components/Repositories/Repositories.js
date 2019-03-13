import React from 'react';
import moment from 'moment';

import './Repositories.css';

const getFromattedDate = (d)=>{
	return moment(d).format("MMMM Do YYYY, h:mm:ss a")
}

const Repositories = (props) => {
	const repositories = (
		props.userRepo.map(repoData => {
			return (
				<div className="repository-info col-md-5 border">
					<div className="repo-name">
						<span className="name">{repoData.name}</span><br />
						<span className="full-name">{repoData.full_name}</span>
					</div>
					<div className="repo-language-info row mt-4">
						<div className="language col-md-3">
							<span className="dot"></span>
							<span className="pl-1">{repoData.language}</span>
						</div>
						<div className="repo-info col-md-8 row ml-5">
							<div className="p-2 border">{repoData.forks} Forks</div>
							<div className="p-2 border">{repoData.watchers} Watchers</div>
							<div className="p-2 border">{repoData.stargazers_count} Stars</div>
						</div>
					</div>
					<div className="repo-lastUpdated mt-4">
                        {"Updated on  " + getFromattedDate(repoData.pushed_at)}
                    </div>
				</div>
			);
		})
	)
	return (
		<div className="repositories-wrapper col-md-8 ml-5 border">
			<h3>Repositories</h3>
			<div className="repository-info-wrapper row">
				{repositories}
			</div>
		</div>
	);
};

export default Repositories;
