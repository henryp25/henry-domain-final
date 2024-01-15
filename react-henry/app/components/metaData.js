import Head from "next/head";

export default function Meta({title, description}) {
    return (
        <Head>
        <title>{title} | Henry Price </title>
        <meta name="description" content={description} />
        </Head>
    )
}
