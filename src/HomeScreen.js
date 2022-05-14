import React from 'react'
import Banner from './Banner';
import './css/homescreen.css';
import Nav from './Nav';
import Row from './Row';
import userrequests from './Request';


const HomeScreen = () => {
  return (
    <div className="homescreen">
    <Nav />
    <Banner />

    <Row title="Trending Now" isLargeRow fetchURL={userrequests.fetchTrending} />
    <Row title="Netflix Originals" isLargeRow fetchURL={userrequests.fetchNetflixOriginals} /> 
    <Row title="Top Rated" isLargeRow fetchURL={userrequests.fetchTopRated} /> 
    <Row title="Crime Action" isLargeRow fetchURL={userrequests.fetchActionMovies} />
    <Row title="Comedy Movies" isLargeRow fetchURL={userrequests.fetchComedyMovies} /> 
    <Row title="Thriller Movies" isLargeRow fetchURL={userrequests.fetchHorrorMovies} />
    <Row title="Romance & Fantasy" isLargeRow fetchURL={userrequests.fetchRomanceMovies} /> 
    <Row title="Documentaries" isLargeRow fetchURL={userrequests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen;