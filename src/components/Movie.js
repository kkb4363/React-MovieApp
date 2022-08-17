import {Link} from 'react-router-dom';

function Movie({id,cover_image,title,summary,genres}){
    
    return (
        <div className='movie'>
        <img src={cover_image} alt={title}/>
        <h2><Link to={`Detail/${id}`}>
            {title}
            </Link></h2>
        <p>{summary.length > 160 ? `${summary.slice(0,160)}...` : summary}</p>
        <ul className='ulstyle'>
        {genres.map((g) => (<li key={g}>{g}</li>))}
        </ul>
        </div>          
 )
};

export default Movie;