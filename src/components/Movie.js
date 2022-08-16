import {Link} from 'react-router-dom';

function Movie({url,id,cover_image,title,summary,genres}){
    console.log(url)
    return (
        <div>
        <img src={cover_image} alt={title}/>
        <h2><Link to={`Detail/${id}`}>{title}</Link></h2>
        <p>{summary}</p>
        <a href={url}>{title}</a>
        <ul>
        {genres.map((g) => (<li key={g}>{g}</li>))}
        </ul>
        </div>          
 )
};

export default Movie;