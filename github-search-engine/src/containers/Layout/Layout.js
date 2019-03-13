import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { getUserData, getUserRepo, getRepoData } from '../../Helper/helper';
import UserInfo from '../../components/UserInfo/UserInfo';
import Repositories from '../../components/Repositories/Repositories';

class Layout extends Component {

	state = {
		searchInput: null,
		searchBy: 'username',
		userData: null,
		repoData: null,
		userRepo: null
	};

	searchOptionHandler = (event) => {
		event.preventDefault();
		this.setState({
			...this.state,
			searchBy: event.target.value
		});
	};

	// getUserData = (userName) => {
	// 	const url = 'https://api.github.com/users/' + userName + '?client_id=4ddf9cf2655d5a56cc61&client_secret=695a1d2b6e44672200c8f31a01530f10d9e6206c';
	// 	fetch(url)
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			this.setState({
	// 				...this.state,
	// 				userData: data
	// 			});
	// 		})
	// };

	// getUserRepo = (userName) => {
	// 	const url = 'https://api.github.com/users/' + userName + '/repos?client_id=4ddf9cf2655d5a56cc61&client_secret=695a1d2b6e44672200c8f31a01530f10d9e6206c';
	// 	fetch(url)
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			this.setState({
	// 				...this.state,
	// 				userRepo: data
	// 			});
	// 		})
	// };

	searchInputHandler = (event) => {
		let userData = this.state.userData;
		let userRepo = this.state.userRepo;
		let repoData = this.state.repoData;

		if (event.which === 13) {
			event.preventDefault();
			if (this.state.searchBy === 'username') {
				userData = getUserData(event.target.value);
				userRepo = getUserRepo(event.target.value);
				userData.then((userData) => {
					userRepo.then((userRepo) => {
						this.setState({
							userData,
							userRepo
						});
					});
				});
				// userRepo.then((userRepo) => {
				// 	this.setState({
				// 		userRepo
				// 	});
				// });
			} else if (this.state.searchBy === 'repo') {
				repoData = getRepoData(this.state.searchBy);
				repoData.then((repoData) => {
					this.setState({
						repoData
					});
				});
			}
		}
		this.setState({
			...this.state,
			searchInput: event.target.value
		});
	};

	render() {
		let userDetails = null;
		console.log(this.state.userData, this.state.userRepo)
		if (this.state.userData !== null && this.state.userRepo !== null) {
			userDetails = (
				<div className="user-details row mt-5">
					<UserInfo userData={this.state.userData} />
					<Repositories userRepo={this.state.userRepo} />
				</div>
			);
		}
		return (
			<div className="layout">
				<Header
					searchOptionHandler={(event) => this.searchOptionHandler(event)}
					searchInputHandler={(event) => this.searchInputHandler(event)}
				/>
				{userDetails}
			</div>
		);
	};
};

export default Layout;
