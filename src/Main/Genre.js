import React from "react";
import { MovieFilter } from "./MovieFilter";
import { getMovieByTag } from "../Api/Movies";

export const Genre = () => {

    const dataList = [{
        name: "dramat",
        queryValue: "dramat"

    },
    {
        name: "komedia",
        queryValue: "komedia"

    },
    {
        name: "horror",
        queryValue: "horror"

    },
    {
        name: "sensacyjny",
        queryValue: "sensacyjny"

    }, {
        name: "psychologiczny",
        queryValue: "psychologiczny"

    },
    {
        name: "kryminał",
        queryValue: "kryminał"

    },
    {
        name: "romans",
        queryValue: "romans"

    }
    ]

    return (
        <MovieFilter
            dataList={dataList}
            handler={getMovieByTag}
            movieFilterHeader={'Gatunek'}
            backImage={"/images/genre2.png"}
        ></MovieFilter>
    )
}