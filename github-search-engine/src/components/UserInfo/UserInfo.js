import React from 'react';
import './UserInfo.css';

const UserInfo = (props) => {
	return (
		<div className="user-info col-md-2 offset-1 p-2">
			<div className="username">
				<p className="text-center">{props.userData.login}</p>
			</div>
			<div className="profile-image">
				<img className="image" src={props.userData.avatar_url} alt="Profile pic not available" />
			</div>
			<div className="view-profile pt-3">
				<button className="btn form-control btn-md btn-primary">View Profile</button>
			</div><br />
			<div className="other-information m-2" style={{ fontSize: '14px' }}>
				<div className="row pl-2 pr-2">
					<div className="public-repo col-md-6 w-50 border p-2">{props.userData.public_repos} Public Repo</div>
					<div className="public-repo col-md-6 w-50 border p-2">{props.userData.public_gists} Public Gists</div>
				</div>
				<div className="row pl-2 pr-2">
					<div className="public-repo col-md-6 w-50 border p-2">{props.userData.followers} Followers</div>
					<div className="public-repo col-md-6 w-50 border p-2">{props.userData.following} Following</div>
				</div>

			</div>
		</div>
	);
};

export default UserInfo;
