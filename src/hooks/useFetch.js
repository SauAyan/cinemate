import { useEffect, useState } from "react";

function useFetch({apiPath,queryTerm=""}) {
    
    const [movies,setMovies] = useState([])
    const [error,setError] = useState("")
    const [loading,setLoading] =useState(false)

    const url = queryTerm ? `https://api.themoviedb.org/3/${apiPath}/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}` : `https://api.themoviedb.org/3/movie/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`
    console.log(url)

    async function FetchMovies(){
        setLoading(true)
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error(response.statusText)
            }
            const data = await response.json();
            setLoading(false)
            setMovies(data.results);
            setError("")       

        }
        catch(error){
            setLoading(false)
            setError(error.message)
        }
        
    }

    useEffect(()=>{FetchMovies()},[url])

    return {movies,loading,error}

}

export default useFetch;