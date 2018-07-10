import React from 'react';

import './_main.scss';

class Main extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <main className="main">
                <h2>Social Media:</h2>
                <ul>
                    <li><a href="https://gitlab.com/dafzthomas" rel="me">Gitlab</a></li>
                    <li><a href="https://twitter.com/dafzthomas" rel="me">Twitter</a></li>
                </ul>

                <h2>Crypto</h2>
                <ul>
                    <li>BTC: <code>38be96QeRRbXGRAWqv9PzWzennvehcYGpj</code></li>
                    <li>ETH: <code>0xf3291ad8540B3Cf0081ae161a45F4F0e6c670297</code></li>
                    <li>LTC: <code>MAopGvwqcuB7igBjmKnqUAmBrThEpNncdp</code></li>
                </ul>
            </main>
        );
    }
}

export default Main;