import React from 'react';
import '../styles/globals.css'; // Global CSS
import RootLayout from '../app/layout'; // Adjust the path as necessary

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;