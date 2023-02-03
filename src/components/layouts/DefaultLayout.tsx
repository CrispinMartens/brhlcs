import Head from 'next/head';
import type { PropsWithChildren } from 'react';

import TopNav from '../TopNav';

interface DefaultLayoutProps extends PropsWithChildren {}

const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <Head>
        <title>Baraholics</title>
      </Head>

      <TopNav />
      <div className="max-w-full grow">
        <main>{children}</main>
      </div>
    </>
  );
};

export default DefaultLayout;
