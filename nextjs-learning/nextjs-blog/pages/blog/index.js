import Link from "next/link";
import Head from 'next/head'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <h3>Blog Page</h3>
      <Link href="/">Geri Dön</Link>
    </div>
  );
}
