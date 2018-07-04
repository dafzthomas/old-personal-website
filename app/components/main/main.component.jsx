import React from 'react';

import './_main.scss';

class Main extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <main className="main">
                <h2>Web locations:</h2>
                <ul>
                    <li><a href="https://gitlab.com/dafzthomas" rel="me">Gitlab</a></li>
                    <li><a href="https://twitter.com/dafzthomas" rel="me">Twitter</a></li>
                    <li><a href="https://www.facebook.com/dafzthomas" rel="me">Facebook</a></li>
                </ul>
                <h2>Cryptocurrency Addresses</h2>
                <ul>
                    <li>BTC: 38be96QeRRbXGRAWqv9PzWzennvehcYGpj</li>
                    <li>ETH: 0xf3291ad8540B3Cf0081ae161a45F4F0e6c670297</li>
                    <li>LTC: MAopGvwqcuB7igBjmKnqUAmBrThEpNncdp</li>
                </ul>
            </main>
        );
    }
}

export default Main;