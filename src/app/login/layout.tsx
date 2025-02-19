import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Login Metadata",
};

export default function LoginLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
