import '../styles/global.css';

import type { AppProps } from 'next/app';

import DefaultLayout from '@/components/layouts/DefaultLayout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <DefaultLayout>
    <Component {...pageProps} />
  </DefaultLayout>
);

export default MyApp;
