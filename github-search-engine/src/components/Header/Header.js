import React from 'react';
import Brand from '../Brand/Brand';
import SearchOptions from '../SearchOptions/SearchOptions';

const Header = (props) => {
    return (
        <div className="header w-100 border p-3" style={{ background: '#24282E' }}>
            <div className="header-content col-md-12 row ">
                <Brand />
                <SearchOptions
                    searchOptionHandler={(event) => props.searchOptionHandler(event)}
                    searchInputHandler={(event) => props.searchInputHandler(event)}
                />
            </div>
        </div>
    );
};

export default Header;
