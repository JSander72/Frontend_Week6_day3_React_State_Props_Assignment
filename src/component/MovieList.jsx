import React, { useState } from 'react';

const MovieList = () => {
    const [movies, setMovies] = useState([
        { title: 'Inception', description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', showDetails: false },
        { title: 'Interstellar', description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', showDetails: false },
        { title: 'Parasite', description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.', showDetails: false },
        { title: 'The Matrix', description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', showDetails: false },
        { title: 'Gladiator', description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', showDetails: false }
    ]);

    const toggleDetails = (index) => {
        setMovies(movies.map((movie, i) => 
            i === index ? { ...movie, showDetails: !movie.showDetails } : movie
        ));
    };

    const removeMovie = (index) => {
        setMovies(movies.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Movie List</h1>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        <span onClick={() => toggleDetails(index)}>{movie.title}</span>
                        <button onClick={() => removeMovie(index)}>Remove</button>
                        {movie.showDetails && <p>{movie.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
