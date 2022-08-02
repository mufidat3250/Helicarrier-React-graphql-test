import "./App.scss";
import FilterBox from "./atoms/FIlterBox/Index";
import NavBar from "./molecules/Navbar";
import AnimeService from "../src/service/AllAnime";
import { useEffect } from "react";
import { allAnime } from "./Store/AllAnemeData";
import { useDispatch, useSelector } from "react-redux";
import AnimeMovies from "./atoms/AnimeMovies/AnimeMovies";
import Select from "./atoms/Select";
import { filterByGenre, filterByYear } from "./Store/filterReducer";

function App() {
  const dispatch = useDispatch();
  const genres = useSelector(({ AllAnime }) =>
    AllAnime.reduce((acc, { genres }) => {
      const checkArr = genres.map((value) => {
        if (acc.indexOf(value) === -1) {
          acc.push(value);
        }
      });
      return acc;
    }, [])
  );
  const years = useSelector(({ AllAnime }) =>
    AllAnime.map(({ seasonYear }) => seasonYear)
      .filter((year, i, arr) => arr.indexOf(year) === i)
      .sort((a, b) => a - b)
  );

  const fetchAnimePage = async () => {
    try {
      const animePage = await AnimeService.getAnimePage();
      if (!animePage) {
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAnimePage();
  }, []);

  const handleYear = (data) => {
    dispatch(filterByYear(data));
  };
  const handleGenres = (data) => {
    dispatch(filterByGenre(data));
    console.log(data);
  };
  const handleAllData = () => {
    dispatch(filterByGenre(""));
    dispatch(filterByYear(""));
  };

  return (
    <div className="App ">
      <div className="container">
        <NavBar />
        <div className="filter-container">
          <FilterBox title="All" handleClick={handleAllData} />
          <Select title="Year" options={years} handleClick={handleYear} />
          <Select title="Gengres" options={genres} handleClick={handleGenres} />
        </div>

        <div className=" mt-10 overflow-auto h-full pb-[18rem]">
          {years.map((data, index) => (
            <AnimeMovies key={`index${index}`} date={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
