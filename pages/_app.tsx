import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../styles/uicons-regular-rounded/css/uicons-regular-rounded.css';
import '../styles/uicons-solid-straight/css/uicons-solid-straight.css';
import '../styles/uicons-solid-rounded/css/uicons-solid-rounded.css';
import '../styles/uicons-solid-straight/css/uicons-solid-straight.css';
import '../styles/uicons-bold-rounded/css/uicons-bold-rounded.css';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
