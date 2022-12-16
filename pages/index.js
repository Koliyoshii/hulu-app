import Head from "next/head";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Results from "../components/Results/Results";
import requests from "../lib/requests";

export default function Home({ results }) {

  return (
    <div>
      <Head>
        <title>hulu 2.0</title>
        <meta
          name="description"
          content="This is a hulu app made with NextJS, TailwindCSS and more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Navbar */}
      <Navbar />

      {/* Results */}
      <Results results={results}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  //const request = [];

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request,
    },
  };
}
