
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import '../../../styles/movie.css'
import Head from 'next/head'
import PageHeader from '../../../app/components/movie-app/PageHeader'




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
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const readAccessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGNmMGVkYjg1MTZmZjQzNjM0NzE4YWRjYjk4OGFmNSIsInN1YiI6IjY2MTZiYmYxN2E0ZWU3MDE2MzBhNGFhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NwHjomSj24e_eFSpivIagTQOGMB1Z7qePKGa-DssOYw"
    const [page, setPage] = useState(1)
    const route = useRouter()
    const {id} = route.query

    function nextPage(){
       setPage(page + 1)
    }
     function prevPage(){
        if(page === 1){
            setPage(1)
        } else {
            setPage(page - 1)
        }

     }

    useEffect(() => {
        async function movieDatabase(e, p){
            const imageBaseUrl = 'https://image.tmdb.org/t/p/original';
            const url = `https://api.themoviedb.org/3/search/movie?query=${e}&include_adult=false&language=en-US&page=${p}`
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${readAccessToken}`
                }
            }   
            try {
                const movies = await axios.get(url, options)
                const movieData = movies.data
                const cleanedMovieData = movieData.results.slice(0, 6)
            
                cleanedMovieData.map(movie => {
             
                    return {
                        ...movie,
                        poster_path: movie.poster_path !== null ? `${imageBaseUrl}${movie.poster_path}` : 'img/noom-peerapong.jpg',
                        title: movie.title || 'Title not available',
                        popularity: movie.popularity !== null ? movie.popularity : 'Popularity not available',
                        vote_average: movie.vote_average !== null ? movie.vote_average : 'Vote average not available',
                        vote_count: movie.vote_count !== null ? movie.vote_count : 'Vote count not available',
                    };
                });
                
                return setMovies(cleanedMovieData)
            } catch (error) {
                console.error('Error in getStaticProps:', error);
                return setMovies([]) // Return an empty array on error
            } finally{
                setLoading(false)
            
            }
        }
        movieDatabase(id, page)
        
      }, [id,page])

      useEffect(() => {
        
       async function changingPagination(){
            if( movies.length >= 6){
                const paginationClass = document.getElementsByClassName('nextPrev')
                paginationClass[0].style.display = 'flex'

            }
         }

       changingPagination()
    }, [movies])
        
  
  return (
    <div className='movieSearch'>
        <Head>
          <title>
              {metadata.title}
          </title>
          <meta name="description" content={metadata.description} />
          <link rel="canonical" href={metadata.alternates.canonical} />
        </Head>
        <PageHeader />
        <h2 className='searchQuery'>Movies searches for <span className="query">{id}</span></h2>
        <div className='profileContainer'>
            {loading && ( 
                <h1>Loading...</h1>
            )}
            {!loading && (movies.map((movies)=>{
                return (
                    <div className='movieCard' key={movies.id}>    
                        <img src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt={movies.title} width={300} height={300} />
                        <Link href={`/movie-app/movies/${movies.id}`}><h2>{movies.title}</h2></Link>
                        <ul>
                            <li><span>Popularity</span> {movies.popularity}</li>
                            <li><span>Vote Average</span> {Math.round(movies.vote_average)}</li>
                            <li><span>Vote Count</span> {movies.vote_count}</li>
                            <li><span>Release Date</span> {movies.release_date}</li>
                        </ul>

                    </div>
                )
            }))}
        </div>
        <div className='nextPrev'>
            <button type='button' onClick={nextPage}>Next Page</button>
            <button type='button' onClick={prevPage}>Previous Page</button>
        </div>  
    </div>
  );
}