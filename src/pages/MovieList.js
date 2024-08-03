import { useEffect } from 'react';
import {Card} from '../components'
import useFetch from '../hooks/useFetch';

function MovieList({reqUrl,pageTitle}){

    const {movies:movieList} = useFetch({apiPath:reqUrl})
    //console.log(movieList)  

    useEffect(()=>{
        document.title = `${pageTitle}`
    },[pageTitle])

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap">
                    {movieList.map((movie)=>(
                        <Card key={movie.id} movie={movie}></Card>
                    ))}                                                       
                    
                </div>

            </section>

        </main>
    )
}

export default MovieList;