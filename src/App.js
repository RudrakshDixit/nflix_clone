import React from 'react'
import requests from "./requests";
import Row from "./components/Row";
import Banner from "./components/Banner";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        chal NETFLIX Clone banate Hain!!!
      </h1>
      <Banner />
      <Row title = "Netflix Originals" fetchURL = {requests.fetchNetflixOriginals} islargerow={true} />
      <Row title = "Trending Now" fetchURL= {requests.fetchTrending} />
      <Row title = "Action Movies" fetchURL = {requests.fetchActionMovies} />
      <Row title = "Top Rated" fetchURL = {requests.fetchTopRated} />
      <Row title = "Romantic Movies" fetchURL = {requests.fetchRomanceMovies} />
      <Row title = "Horror Movies" fetchURL = {requests.fetchHorrorMovies} />
      <Row title = "Documentaries" fetchURL = {requests.fetchDocumentaries} />
      <Row title = "Comedy Movies" fetchURL = {requests.fetchComedyMovies} />


    </div>
  );
}

export default App;
