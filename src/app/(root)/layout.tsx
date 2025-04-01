import ClientLayout from './clientLayout';

const Layout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <ClientLayout>{children}</ClientLayout>
        </main>
    );
};

export default Layout;
