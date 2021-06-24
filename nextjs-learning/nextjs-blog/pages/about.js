import Link from "next/link"
import Head from 'next/head'
import Layout from "../components/layout"

export default function About(){

    return (
        <div>
            <Head>
                <title>
                    Hakkında
                </title>
            </Head>

            <h3>About page</h3>
            <Link href='/'>
                Geri Dön
            </Link>


            <style jsx>{`

                h3{
                    font-size: 20px;
                    font-weight: 500;
                    color: orangered; 
                }

            `}</style>

        </div>
    )

}