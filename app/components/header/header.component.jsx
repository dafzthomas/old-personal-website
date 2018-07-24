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
                <p title="I am a web developer">Web Developer</p>
                <a href="https://gitlab.com/dafzthomas" rel="me" title="Gitlab profile">Gitlab</a>
                <a href="https://twitter.com/dafzthomas" rel="me" title="Twitter profile">Twitter</a>
            </header>
        );
    }
}

export default Header;