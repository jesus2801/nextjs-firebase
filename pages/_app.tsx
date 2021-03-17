import type { AppProps } from 'next/app';
import { UseAppContext } from '../firebase';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UseAppContext>
      <Component {...pageProps} />
    </UseAppContext>
  );
}

export default MyApp;
