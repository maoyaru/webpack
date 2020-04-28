import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import './search111.scss';
import logo from './images/logo.png';

class Search extends React.Component {
    render() {
        return <div className="search">
            search1122
            <img src={ logo } alt=""/>
            <span className="scss-test">sass</span>
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);