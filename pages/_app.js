import { useState, useEffect } from 'react';
import '../styles/globals.css';
import Router from 'next/router';
import Loading from '../src/components/Loading'

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
        }, 2000);

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

    return loading ? (
        <Loading loading={loading} />
    ) : (
        <Component {...pageProps} />
    );
}

export default MyApp;
