import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

/** styles */
import GlobalStyles from '../styles/global';
import { theme } from '../styles/themes';
import '../styles/index.css';
/** layout */
import MainLayout from './_layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <MainLayout>
                <GlobalStyles />
                <Component {...pageProps} />
            </MainLayout>
        </ThemeProvider>
    );
}
export default MyApp;
