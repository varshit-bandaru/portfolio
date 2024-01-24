import './globals.css';
import type { Metadata } from 'next';

import Navbar from '@/components/Navbar';
import SideBar from '@/components/Sidebar';


export const metadata: Metadata = {
    title: 'Varshit Bandaru',
    description: 'Software Engineer',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
            <div >
                            <SideBar />
                            <main className="flex-1 pl-0 lg:pl-[300px]">
                                <Navbar />
                                {children}
                            </main>
                        </div>
                    
            </body>
        </html>
    );
}