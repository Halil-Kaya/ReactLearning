import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Popular from '../components/popular'

export default function Home({movies}) {
  console.log(movies.results)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Popular movies={movies}/>

    </div>
  )
}


export async function getServerSideProps(){
   
  const request = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3044afc915e1301ae1d9551614db3711&language=en-US&page=1')
  const movies = await request.json()

  return {
    props : {
      movies
    }
  }

}