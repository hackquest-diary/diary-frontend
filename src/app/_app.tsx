import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification'
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
          <Head>
            <title>blockchain daily</title>
          </Head>

            <div className="flex flex-col h-screen">
              <AppBar/>
              <ContentContainer>
                <Component {...pageProps} />
                <Footer/>
              </ContentContainer>
            </div>
        </>
    );
};

export default App;
