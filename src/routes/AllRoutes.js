import { Route, Routes } from "react-router-dom";
import {MovieDetail, MovieList, PageNotFound, SearchPage} from '../pages';
import {Header, Footer} from '../components';

function AllRoutes() {

    const nowPlaying = "now_playing"
    const popular = "popular"
    const topRated = "top_rated"
    const upcoming = "upcoming"
    const search ="search"


    return (
    <div className="dark:bg-slate-800">        
        <Header></Header>
        <Routes>
            <Route path="/" element={<MovieList reqUrl={nowPlaying} pageTitle={"Home"}></MovieList>}></Route>            
            <Route path="/movie/:id" element={<MovieDetail></MovieDetail>}></Route>

            <Route path="/movies/popular" element={<MovieList reqUrl={popular} pageTitle="Popular"></MovieList>}></Route>
            <Route path="/movies/top" element={<MovieList reqUrl={topRated} pageTitle="Top"></MovieList>}></Route>
            <Route path="/movies/upcoming" element={<MovieList reqUrl={upcoming} pageTitle="Upcoming"></MovieList>}></Route>

            <Route path="/search" element={<SearchPage reqUrl={search}></SearchPage>}></Route>

            <Route path="/*" element={<PageNotFound pageTitle="Page Not Found"></PageNotFound>}></Route>        
        </Routes>
        <Footer></Footer>        
    </div>

    )
}

export default AllRoutes;