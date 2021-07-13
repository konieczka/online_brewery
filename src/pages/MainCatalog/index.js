import React, { useState, useEffect } from "react";
import TitleHeader from "components/TitleHeader";
import BeersList from "components/BeersList";
import FiltersMenu from "components/FiltersMenu";
import { PrimaryButton } from "components/Button";
import convertFiltersToUrlParams from "utils/convertFiltersToUrlParams";
import { Container } from "./styles";

const batchLength = 25;
const filtersBoundaries = {
  abv: {
    min: 0.0,
    max: 20.0,
    step: 0.5,
  },
  ibu: {
    min: 0,
    max: 500,
    step: 10,
  },
  search: {
    max: 64,
  },
};

const initialFiltersState = {
  anyFiltersPresent: false,
  newFiltersApplied: false,
  abv: {
    selected: false,
    min: filtersBoundaries.abv.min,
    max: filtersBoundaries.abv.max,
  },
  ibu: {
    selected: false,
    min: filtersBoundaries.ibu.min,
    max: filtersBoundaries.ibu.max,
  },
  search: {
    selected: false,
    value: "",
  },
};

const MainCatalog = () => {
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isThereMoreData, setIsThereMoreData] = useState(true);

  const [beersList, setBeersList] = useState([]);
  const [beersListOffset, setBeersListOffset] = useState(1);

  const [favList, setFavList] = useState([]);
  const [isOnFavSection, setIsOnFavSection] = useState(false);

  const [filtersState, setFiltersState] = useState(initialFiltersState);

  const addToFavourites = (beer) => {
    setFavList((prevState) => [...prevState, beer]);
  };

  const removeFromFavourites = (beer) => {
    setFavList((prevState) => prevState.filter((prev) => prev.id !== beer.id));
  };

  useEffect(() => {
    setIsLoadingData(true);
    const filtersAsParams = convertFiltersToUrlParams(filtersState);

    fetch(
      `/beers?page=${beersListOffset}${
        filtersState.anyFiltersPresent ? filtersAsParams : ""
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length < batchLength) {
          setIsThereMoreData(false);
        }

        setBeersList((currentList) =>
          beersListOffset === 1 ? data : [...currentList, ...data]
        );
      });

    setIsLoadingData(false);
  }, [beersListOffset, filtersState]);

  useEffect(() => {
    if (filtersState.newFiltersApplied) {
      setBeersList([]);
      setIsThereMoreData(true);
      setBeersListOffset(1);
    }
  }, [filtersState.newFiltersApplied]);

  return (
    <Container>
      <TitleHeader title="Krafthaven" subtitle="Royal Brewery" />
      <FiltersMenu
        filtersBoundaries={filtersBoundaries}
        filtersState={filtersState}
        changeFiltersState={setFiltersState}
        resetFilters={() => {
          setBeersList([]);
          setIsThereMoreData(true);
          setFiltersState(initialFiltersState);
        }}
      />
      <div style={{ textAlign: "center" }}>
        <PrimaryButton
          style={{ width: "40%" }}
          onClick={() => setIsOnFavSection((prev) => !prev)}
        >
          {isOnFavSection ? "Catalogue" : `Favourites (${favList.length})`}
        </PrimaryButton>
      </div>
      {isOnFavSection ? (
        <BeersList
          list={favList}
          favList={favList}
          fetchNextBatch={() => {}}
          isThereMoreData={false}
          isLoadingData={false}
          addToFavourites={addToFavourites}
          removeFromFavourites={removeFromFavourites}
        />
      ) : (
        <BeersList
          list={beersList}
          favList={favList}
          fetchNextBatch={() =>
            setBeersListOffset((prevOffset) => prevOffset + 1)
          }
          isThereMoreData={isThereMoreData}
          isLoadingData={isLoadingData}
          addToFavourites={addToFavourites}
          removeFromFavourites={removeFromFavourites}
        />
      )}
    </Container>
  );
};

export default MainCatalog;
