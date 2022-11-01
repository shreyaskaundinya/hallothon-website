import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html className='scroll-smooth' style={{ scrollBehavior: 'smooth' }}>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Inconsolata&family=Poppins&display=swap'
                    rel='stylesheet'></link>
                <link
                    href='https://allfont.net/allfont.css?fonts=agency-fb'
                    rel='stylesheet'
                    type='text/css'
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
