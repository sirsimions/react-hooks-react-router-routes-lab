import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsDetails = directors.map((director)=>(
    <div key={director.name}>
      {director.name}
      <ul>
        {director.movies.map((movie)=>(
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  
  
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsDetails}
    </div>
  )
}


export default Directors;
