import React from "react";


export default function ItemsComponent({movies , movie}) {
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>{movie.Title}</li>
            ))}
            {
                movie.Title &&  <li>{movie.Title}</li>
            }
        </ul>
    )
}
