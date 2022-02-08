import React, { useEffect, useState } from "react";
import Card from "../molecules/Card";
import api from "./../../api/api";

const MovieList: React.FC = () => {
  const [movieList, setMovieList]: any = useState([]);
  const [page, setPage]: any = useState(1);

  const fetchData = () => {
    fetch(
      `${api.MOVIES_BASE}/discover/movie?sort_by=popularity.desc&page=${page}&api_key=${api.MOVIES_KEY}`
    )
      .then((res) => res.json())
      .then(
        (result: any) => {
          setMovieList([...movieList, ...result.results]);
        }
      );
  };

  useEffect(() => {
    fetchData();
  }, []);

  window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
      setPage(page + 1);
      fetchData();
      
    }
  };

  return (
    <div className="movies-container">
      {movieList.length === 0 ? <div className="loader">Loading...</div>: ""}
      {movieList.map((item: any, index: number) => {
        return (
          <Card
            {...item}
            moviesDetails={item}
            key={item.poster_path + index}
          ></Card>
        );
      })}
    </div>
  );
};

export default MovieList;
