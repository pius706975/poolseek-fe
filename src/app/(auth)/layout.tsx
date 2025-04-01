'use client';
import ThemeChanger from '@/components/DarkSwitcher';
import { ThemeProvider } from 'next-themes';
import QueryProvider from './QueryProvider';
import { Provider } from 'react-redux';
import store from '@/store/store';
import { ToastProvider } from '@/components/toast/ToastProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <Provider store={store}>
                <ThemeProvider attribute="class">
                    <QueryProvider>
                        <ToastProvider>
                            <ThemeChanger className="fixed top-4 left-4 p-2 rounded-full z-50 border border-purple-700 dark:border-white" />
                            <div>{children}</div>
                        </ToastProvider>
                    </QueryProvider>
                </ThemeProvider>
            </Provider>
        </main>
    );
};

export default Layout;
