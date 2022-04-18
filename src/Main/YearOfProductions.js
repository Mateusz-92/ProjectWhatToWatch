import { getMovieByDecade } from "../Api/Movies";
import { ButtonMenu } from "./ButtonMenu";
import { MovieFilter } from "./MovieFilter";

export const YearOfProductions = () => {
  const dataList = [
    {
      name: "10",
      queryValue: "1910",
    },
    {
      name: "20", // wartość diva
      queryValue: "1920", // wykonać dla każej dekady
    },
    {
      name: "30",
      queryValue: "1930",
    },
    {
      name: "40",
      queryValue: "1940",
    },
    {
      name: "50",
      queryValue: "1950",
    },
    {
      name: "60",
      queryValue: "1960",
    },
    {
      name: "70",
      queryValue: "1970",
    },
    {
      name: "80",
      queryValue: "1980",
    },
    {
      name: "90",
      queryValue: "1990",
    },
    {
      name: "00",
      queryValue: "2000",
    },
  ];
  return (
    <>
    <MovieFilter
      dataList={dataList}
      handler={getMovieByDecade}
      movieFilterHeader={"Lata Produkcji"}
      typeOfFilter={"XX i XXI"}
      backImage={"/images/clock.png"}
    ></MovieFilter>
    <ButtonMenu/>
    </>
  );
};
