import type { AppProps } from 'next/app';
import UseAppContext from '../firebase/index';

import '../styles/globals.scss';

// app 1.0.0
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UseAppContext>
      <Component {...pageProps} />
    </UseAppContext>
  );
}

export default MyApp;
