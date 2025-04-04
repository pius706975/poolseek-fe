import Navbar from '@/components/shared/navbar/Navbar';
import dynamic from 'next/dynamic';

const ThemeProvider = dynamic(
    () => import('next-themes').then(mod => mod.ThemeProvider),
    { ssr: true },
);

const Layout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class">
            <main className="background-light850_dark100 relative pb-10">
                <Navbar />

                <div className="flex">
                    {/* <LeftSidebar /> */}

                    <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
                        <div className="mx-auto w-full max-w-5xl">
                            {children}
                        </div>
                    </section>
                </div>
            </main>
        </ThemeProvider>
    );
};

export default Layout;
