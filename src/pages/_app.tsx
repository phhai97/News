import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

/** styles */
import GlobalStyles from '../styles/global';
import { theme } from '../styles/themes';

/** layout */
import MainLayout from './_layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ThemeProvider>
    );
}
export default MyApp;
