import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  console.log("Results >>> ",results.results)
  const data = results.results;
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {data.map(result => (
            <Thumbnail key={result.id} result={result} />
        ))}
    </div>
  )
}

export default Results;