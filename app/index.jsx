import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Header from './components/header/header.component.jsx';
import Main from './components/main/main.component';

class App extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));