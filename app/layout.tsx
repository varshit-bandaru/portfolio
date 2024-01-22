import './globals.css';
import type { Metadata } from 'next';


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
               
                                {children}
                      
            </body>
        </html>
    );
}