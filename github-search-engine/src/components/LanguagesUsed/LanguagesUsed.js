import React from 'react';
import './LanguagesUsed.css';

const LanguagesUsed = (props) => {
    let languages = [];
    props.repoData.map(item => {
        if (item.language !== null) {
            let index = languages.findIndex(data => data.language === item.language);
            if (index === -1) {
                languages.push({
                    language: item.language,
                    count: 1
                })
            } else {
                languages[index].count += 1
            }
        }
        return 1;
    });
    let languageList = (
        languages.map(item => {
            return (
                <div className="language-item row w-100" key={item.language}>
                    <div className="language-name col-md-9">{item.language}</div>
                    <div className="language-count col-md-3">{item.count}</div>
                </div>
            );
        })
    );
    return (
        <div className="language-container col-md-2 offset-1 p-3" style={{ maxHeight: '358px' }}>
            <div className="heading">Languages</div>
            <div className="language-list mt-3">
                {languageList}
            </div>
        </div>
    );
};

export default LanguagesUsed;
