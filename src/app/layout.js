import ClientRoot from './ClientRoot';

export const metadata = {
    title: "Notes.js",
    description: "Notes.js: the ultimate note-taking app built with Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ClientRoot>{children}</ClientRoot>
            </body>
        </html>
    );
}