
import './App.css';
import Row from './Row'
import request from './request';
import Banner from './Banner';
import Nav from './Nav';








function App() {
  return (
    <div className="App">
      {/* <h1>Pooven Coder .com</h1> */}
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginal} islargerow/>
      <Row title="Trendind Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchToprated}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Romantic Movies" fetchUrl={request.fetchRomanticMovies}/>
      <Row title="Docmentaries" fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
