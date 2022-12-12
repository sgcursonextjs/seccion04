import Head from "next/head";
import { Navbar } from "../ui";

export function LayOut( { children, title } ){

    return(
        <>
            <Head>
                <title>{ title || "Pokemon App"}</title>
                <meta name="author" content="Sebastián González" />
                <meta name="description" content={`Información sobre pokemon ${title}`}/>
                <meta name="keywords" content={ `${title}, pokemon, pokedex`}/>
            </Head>

            <Navbar></Navbar>

            <main style={{ padding: "0px 20px" }}>

                { children }

            </main>
        </>
    )
}