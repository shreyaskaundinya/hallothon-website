import Router from 'next/router';
import { useEffect, useState } from 'react';
import Loading from '../src/components/Loading';
import '../styles/globals.css';

import { animated, config, Transition } from 'react-spring';

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(1);

    useEffect(() => {
        let timeout;
        // HANDLE LOADING ---------------
        const handleLoading = () => {
            setLoading(1);
        };

        const handleLoaded = () => {
            timeout = setTimeout(() => {
                setLoading(() => 0);
            }, 1000);
        };

        const loadingTimeout = setTimeout(() => {
            setLoading(() => 0);
        }, 1500);

        if (process.browser) {
            Router.events.on('routeChangeStart', handleLoading);
            Router.events.on('routeChangeComplete', handleLoaded);
        }

        return () => {
            Router.events.off('routeChangeStart', handleLoading);
            Router.events.off('routeChangeComplete', handleLoaded);
            clearTimeout(timeout);
            clearTimeout(loadingTimeout);
        };
    }, []);

    return (
        <Transition
            items={loading}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            reverse={loading}
            delay={200}
            config={config.molasses}>
            {(styles, item) => {
                return loading ? (
                    <animated.div style={styles}>
                        <Loading loading={loading} />
                    </animated.div>
                ) : (
                    <animated.div style={styles}>
                        <Component {...pageProps} />
                    </animated.div>
                );
            }}
        </Transition>
    );
}

export default MyApp;
