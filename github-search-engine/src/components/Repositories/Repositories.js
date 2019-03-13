import React from 'react';
import RepositoryInfo from './RepositoryInfo/RepositoryInfo';
import './Repositories.css';

const Repositories = (props) => {
	return (
		<div className="repositories-wrapper col-md-8 ml-5">
			<h3>Repositories</h3>
			<div className="repository-info-wrapper row p-2">
				<RepositoryInfo userRepo={props.userRepo} />
			</div>
		</div>
	);
};

export default Repositories;
