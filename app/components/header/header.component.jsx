import React from 'react';

import './_header.scss';

class Header extends React.Component {
    constructor (props) {
        super(props);

    }

    render () {
        return (
            <header>
                <h1>Dafydd Thomas</h1>
                <p>Web Developer</p>
            </header>
        );
    }
}

export default Header;