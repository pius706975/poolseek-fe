import { ThemeProvider } from 'next-themes';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class">
            <div
                className="min-h-screen p-8 pb-20 gap-16 sm:p-20 pt-20 font-[family-name:var(--font-geist-sans)] 
                transition-all lg:ml-64 lg:max-w-[calc(100%-256px)]">
                {children}
            </div>
        </ThemeProvider>
    );
};

export default ClientLayout;
