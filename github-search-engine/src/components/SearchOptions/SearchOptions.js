import React from 'react';

const SearchOptions = (props) => {
    return (
        <div className="search-options col-md-6 offset-1">
            <form className="row w-100">
                <div className="searchBy col-md-4 border">
                    <select
                        className="form-control"
                        style={{ border: 'none' }}
                        defaultValue="username"
                        onChange={(event) => props.searchOptionHandler(event)}>
                        <option value="username">Username</option>
                        <option value="repo">Repo</option>
                    </select>
                </div>
                <div className="search-input col-md-8 border">
                    <input
                        type="text"
                        className="form-control"
                        style={{ border: 'none' }}
                        placeholder="Enter A Github Username"
                        onKeyDown={(event) => props.searchInputHandler(event)} />
                </div>
            </form>
        </div>
    );
};

export default SearchOptions;
