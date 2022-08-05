import React from "react";

const AnimeCard = ({
  id,
  coverImage: { medium },
  title: { romaji },
  popularity,
  episodes,
  duration,
  seasonYear,
  genres,
}) => {
  return (
    <div>
      <div className="flex items-center space-x-4">
        <div className="w-[150px]">
          <img src={medium} alt="" className=" w-full object-contain" />
        </div>
        <div className="">
          {<h1 className="text-[16px] text-[#ed6060]">{romaji}</h1>}
          <div className="flex gap-4 mt-3">
            <div>
              <span>
                <strong>Popularity: </strong>
                {popularity}{" "}
              </span>
              <p>
                <strong>Season Year: </strong>
                {seasonYear}{" "}
              </p>
            </div>
            <div>
              <span>
                <strong>Duration: </strong>
                {duration} hours
              </span>
              <p>
                <strong>Episodes: </strong>
                {episodes}{" "}
              </p>
            </div>
          </div>

          <div className="grid">
            <div className=" mt-2">
              <p className="font-[500] text-[#fa8383] ">Gengries</p>
              <span> {genres.join(" | ")}</span>
            </div>
            <button className="bg-[#FF4D4E] p-3 mt-4 text-white rounded-[8px] w-[100px] font-[500] cursor-pointer">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
