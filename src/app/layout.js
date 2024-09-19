import { Provider } from "react-redux";

export const metadata = {
    title: "Notes.js",
    description: "Notes.js: the ultimate note-taking app built with Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Provider store={store}>
                <body>{children}</body>
            </Provider>
        </html>
    );
}
