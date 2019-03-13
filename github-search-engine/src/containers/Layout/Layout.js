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
		userRepo: null,
		isUserNotFound: false
	};

	searchOptionHandler = (event) => {
		event.preventDefault();
		this.setState({
			...this.state,
			searchBy: event.target.value
		});
	};

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
					if (userData.message !== 'Not Found') {
						userRepo.then((userRepo) => {
							this.setState({
								userData,
								userRepo,
								isUserNotFound: false
							});
						});
					}
					if (userData.message === 'Not Found') {
						this.setState({ isUserNotFound: true })
					}
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
		if (this.state.isUserNotFound) {
			userDetails = (
				<div className="message text-center pt-5">
					<h2>User not found</h2>
				</div>
			)
		}
		if (this.state.userData !== null && this.state.userRepo !== null) {
			userDetails = (
				<div className="user-details row mt-5">
					<UserInfo userData={this.state.userData} />
					<Repositories userRepo={this.state.userRepo} />
				</div>
			);
		}
		if (!this.state.isUserNotFound && this.state.userData === null && this.state.userRepo === null) {
			userDetails = (
				<div className="message text-center pt-5">
					<h2>Please Enter search String</h2>
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
