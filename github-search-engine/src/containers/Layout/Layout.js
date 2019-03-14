import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { getUserData, getUserRepo, getRepoData } from '../../Helper/helper';
import ContentPlaceholder from '../../components/ContentPlaceholder/ContentPlaceholder';
import UserData from '../../components/UserData/UserData';
import RepositoryData from '../../components/RepositoryData/RepositoryData';

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
			} else if (this.state.searchBy === 'repo') {
				repoData = getRepoData(event.target.value);
				repoData.then((repoData) => {
					this.setState({
						repoData: repoData.items
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
		return (
			<div className="layout">
				<Header
					searchOptionHandler={(event) => this.searchOptionHandler(event)}
					searchInputHandler={(event) => this.searchInputHandler(event)}
				/>
				<ContentPlaceholder {...this.state} />
				{
					this.state.searchBy === 'username' ? <UserData {...this.state} /> : <RepositoryData {...this.state} />
				}
			</div>
		);
	};
};

export default Layout;
