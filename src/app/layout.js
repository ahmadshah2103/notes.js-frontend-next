import ClientRoot from './ClientRoot';
import dynamic from 'next/dynamic';

const ClientSideGoogleOAuthProvider = dynamic(
  () => import('../components/auth/ClientSideGoogleOAuthProvider'),
  { ssr: false }
);

export const metadata = {
    title: "Notes.js",
    description: "Notes.js: the ultimate note-taking app built with Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ClientSideGoogleOAuthProvider>
                    <ClientRoot>{children}</ClientRoot>
                </ClientSideGoogleOAuthProvider>
            </body>
        </html>
    );
}