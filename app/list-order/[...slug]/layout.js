import Head from "next/head";
export default function Layout({ children }) {
    return (
        <div className="h-full w-full block">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <link rel="subway" href="/favicon.ico" />
            </Head>
            {children}
        </div>
    );
}