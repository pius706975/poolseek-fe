import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'PoolSeek',
    description: 'PoolSeek is a Q&A platform',
    icons: '/img/brand.ico'
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute="class">
                    <div>{children}</div>
                </ThemeProvider>
            </body>
        </html>
    );
}
