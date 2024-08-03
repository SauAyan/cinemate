import {Card} from '../components'
import useFetch from '../hooks/useFetch';
import { useSearchParams } from "react-router-dom";
import { useEffect } from 'react';

function SearchPage({reqUrl}){

     // eslint-disable-next-line
    const [searchParams,setSearchParams] = useSearchParams()
    const query = searchParams.get("q")
    const {movies:movieList} = useFetch({apiPath:reqUrl,queryTerm:query})
    console.log(movieList)

     // eslint-disable-next-line
    useEffect(()=>{
        document.title = `Search Results: ${query}`
    },[query])

    return (
        <main>
        <section className='p-7'>
            <p className='text-3xl text-gray-700 dark:text-white'>
                {movieList.length ===0 ? `OOps! Could not find anything mathching "${query}"..................`:""}
            </p>
        </section>
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

export default SearchPage;