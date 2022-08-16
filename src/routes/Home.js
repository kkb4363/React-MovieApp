import {useState, useEffect} from 'react';
import Movie from '../components/Movie';
import Detail from '../routes/Detail';

    function Home(){
        const [loading,setloading] = useState(true);
        const [movies,setmovies] = useState([]);
        useEffect(()=>{
          fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
          .then((response) => response.json())
          .then((json)=> {
            setmovies(json.data.movies);
            setloading(false);
          })
      },[]);
      
        return (
          <div>

            {loading ? (<h1>Loading...</h1>) : (<div> {movies.map((movies)=> <Movie 
              cover_image = {movies.medium_cover_image} 
              title = {movies.title}
              id = {movies.id}
              summary = {movies.summary}
              genres = {movies.genres}
              url = {movies.url}
             />
            )}
                
            </div>
            ) 
            }
          
          </div>
        );
      }

      export default Home;