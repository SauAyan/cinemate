import PageNotFoundImd from '../assets/images/pagenotfound.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function PageNotFound({pageTitle}){

    useEffect(()=>{
        document.title = `${pageTitle}`
    },[pageTitle])


    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col items-center my-4">
                    <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404 OOps!!</p>
                    <div className='max-w-lg'>
                        <img className="rounded" src={PageNotFoundImd} alt='Page Not Found'></img>
                    </div>                    
                </div>
                <div className='flex justify-center my-4'>
                    <Link to="/">
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back to Cinemate</button>
                    </Link>                    
                </div>
            </section>
        </main>
    )
}

export default PageNotFound;