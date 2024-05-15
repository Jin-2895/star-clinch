import '../styles/global.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-tailwind/react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
