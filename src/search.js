import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import logo from './images/logo.png';

class Search extends React.Component {
    render() {
        return <div className="search">
            search1122
            <img src={ logo } alt=""/>
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);