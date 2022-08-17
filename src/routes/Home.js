import {useState, useEffect} from 'react';
import Movie from '../components/Movie';

    function Home(){
        const [loading,setloading] = useState(true);
        const [movies,setmovies] = useState([]);
        useEffect(()=>{
          fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
          .then((response) => response.json())
          .then((json)=> {
            setmovies(json.data.movies);
            setloading(false);
            console.log(json.data.movies);
          })
      },[]);
      
        return (
          <div>

            {loading ? (<h1>Loading...</h1>) : 
            (<div className='movie-display'> 
              {movies.map((mov)=> <Movie 
              cover_image = {mov.medium_cover_image} 
              title = {mov.title}
              id = {mov.id}
              summary = {mov.summary}
              genres = {mov.genres}
             />
            )}
             
            </div>
            ) 
            }
          
          </div>
        );
      }

      export default Home;