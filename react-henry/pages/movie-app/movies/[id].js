
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Head from 'next/head'
import '../../../styles/movie.css'
import '../../../styles/moviePage.css'
import PageHeader from '../../../app/components/movie-app/PageHeader'

// export async function getServerSideProps(resolvedUrl) {

//   console.log(resolvedUrl)

//   return {
//       props: {
//         resolvedUrl
          
//       }
//   };
// }
export async function getServerSideProps(context) {
  const { params, resolvedUrl, req } = context;
  //Metadata

  const searchTerm = params.id;
  console.log(resolvedUrl)

  //Canonical
  const siteURL = req.headers.host
  console.log(`${siteURL}${resolvedUrl}`)

  const metadata = {
      title: `Movies search for ${searchTerm}`,
      description: `Search for movies with the term ${searchTerm}`,
      alternates: {
      canonical: `${siteURL}${resolvedUrl}`,
    }
  };
  return {
      props: {
          searchTerm,
          metadata
      }
  };
}
export default function MovieDetails({metadata}) {
    const [movie, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const route = useRouter()
    const {id} = route.query
    const readAccessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGNmMGVkYjg1MTZmZjQzNjM0NzE4YWRjYjk4OGFmNSIsInN1YiI6IjY2MTZiYmYxN2E0ZWU3MDE2MzBhNGFhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NwHjomSj24e_eFSpivIagTQOGMB1Z7qePKGa-DssOYw"

    useEffect(() => {
        async function fetchMovie(){
          const url = `https://api.themoviedb.org/3/movie/${id}`
          const options = {
              headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${readAccessToken}`
              }
          }   
          try {
              const movies = await axios.get(url, options)
              return setMovies(movies.data)
          } catch (error) {
              console.error('Error in getStaticProps:', error);
              return setMovies([]) // Return an empty array on error
          } finally{
                setLoading(false)

          }
        }
        fetchMovie()
      }, [id])
  
  return (
    <div>
        <Head>
          <title>
              {metadata.title}
          </title>
          <meta name="description" content={metadata.description} />
          <link rel="canonical" href={metadata.alternates.canonical} />
        </Head>
        <PageHeader />
        <div className="container">
          {loading && (<h1 className="loading">Loading...</h1>)}

          {!loading && movie && 
            (
              console.log(movie),
              <div className="movie-details">
                <h1>{movie.title}</h1>
                <div className='movie-overview'>
                  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />

                </div>
                <div className='movieStats'>
                  <p>{movie.overview}</p>
                  <ul>
                    <li><span>Popularity</span> {movie.popularity}</li>
                    <li><span>Vote Average</span> {Math.round(movie.vote_average)}</li>
                    <li><span>Released</span> {movie.release_date}</li>
                  </ul>
                </div>
        
              </div>
              )}
        </div>
    </div>
  );
}