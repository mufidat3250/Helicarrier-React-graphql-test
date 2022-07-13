import React from "react";
import { useSelector } from "react-redux";
import ParseDate from "../../utils/utils";
import AnimeCard from "../AnimeCard/AnimeCard";

const AnimeMovies = ({ date }) => {
  const AnimeData = useSelector(
    ({ AllAnime, filter: { year, search, genre } }) =>
      AllAnime.filter(({ seasonYear, title: { romaji }, genres }) => {
        console.log(genres);
        return (
          Number(year)
            ? seasonYear === date && seasonYear === Number(year)
            : search
            ? romaji.toLowerCase().includes(search.toLowerCase())
            : genre
            ? genres.includes(genre)
            : seasonYear === date
        );
      })
  );

  // console.log(AnimeData);
  return (
    <div className="">
      {AnimeData.length !== 0 && (
        <>
          {AnimeData.length !== 0 && (
            <h1 className="bg-[#FF4D4E] text-white py-4 font-[500] text-[24px] pl-3">
              {date}
            </h1>
          )}
          <div className=" my-8 space-y-8 ">
            {AnimeData.map((data) => (
              <AnimeCard key={data.id} {...data} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AnimeMovies;

// ||
