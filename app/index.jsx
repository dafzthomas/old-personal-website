import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Header from './components/header/header.component.jsx';


class App extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Header />
                <main className="main">

                </main>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));