import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  console.log("Results >>> ",results.results)
  const data = results.results;
  return (
    <div className="px-2 my-10 grid grid-cols-1 md:grid-cols-2 md:px-5 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {data.map(result => (
            <Thumbnail key={result.id} result={result} />
        ))}
    </div>
  )
}

export default Results;