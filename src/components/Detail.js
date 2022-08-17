import { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';

function Detail(){
    const {id} = useParams();
    const [details, setdetails] = useState([]);
    useEffect(()=>{
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((Response) => Response.json())
        .then((json) => {
            console.log(json.data.movie);
            setdetails(json.data.movie);
        })
    },[]
    );

    return (
        <div key={id}>
        <img src={details.medium_cover_image} alt={details.title}/>
        <h1>{details.title}</h1>
        <h3>Rating = {details.rating}</h3>
        <h4>like_count = {details.like_count}</h4>
        <a href={details.url}>{details.title}'s URL</a>
        
        
        </div>

    );
}
export default Detail;