import React from 'react';

import './_main.scss';

class Main extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <main className="main">
                <section className="crypto-info">
                    <h2 className="heading" title="Bitcoin">BTC</h2>
                    <p title="Bitcoin address"><code>38be96QeRRbXGRAWqv9PzWzennvehcYGpj</code></p>

                    <h2 className="heading" title="Ethereum">ETH</h2>
                    <p title="Ethereum address"><code>0xf3291ad8540B3Cf0081ae161a45F4F0e6c670297</code></p>

                    <h2 className="heading" title="Litecoin">LTC</h2>
                    <p title="Litecoin address"><code>MAopGvwqcuB7igBjmKnqUAmBrThEpNncdp</code></p>
                </section>
            </main>
        );
    }
}

export default Main;