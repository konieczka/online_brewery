import React, { useState } from "react";
import { PrimaryButton, PrimaryButtonNoBg } from "components/Button";
import CustomRangeInput from "components/CustomRangeInput";
import { FiltersMenuModal } from "./styles";

const FiltersMenu = ({
  filtersState,
  filtersBoundaries,
  changeFiltersState,
  resetFilters,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible((prevState) => !prevState);

  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <PrimaryButtonNoBg style={{ marginTop: "32px" }} onClick={toggleModal}>
        Filters{" "}
        {filtersState.anyFiltersPresent &&
          `(${
            Object.keys(filtersState).filter(
              (filter) => filtersState[filter].selected
            ).length
          })`}
      </PrimaryButtonNoBg>
      {isModalVisible && (
        <FiltersMenuModal>
          <h1>Filters</h1>
          <CustomRangeInput
            label="ABV"
            maxVal={filtersState.abv.max}
            minVal={filtersState.abv.min}
            onChangeMin={(val) =>
              changeFiltersState((prevState) => ({
                ...prevState,
                anyFiltersPresent: true,
                newFiltersApplied: !prevState.newFiltersApplied,
                abv: {
                  ...prevState.abv,
                  min: val,
                  selected: true,
                },
              }))
            }
            onChangeMax={(val) =>
              changeFiltersState((prevState) => ({
                ...prevState,
                newFiltersApplied: !prevState.newFiltersApplied,
                anyFiltersPresent: true,
                abv: {
                  ...prevState.abv,
                  max: val,
                  selected: true,
                },
              }))
            }
            minLimits={filtersBoundaries.abv}
            maxLimits={filtersBoundaries.abv}
            step={filtersBoundaries.abv.step}
          />
          <CustomRangeInput
            label="IBU"
            maxVal={filtersState.ibu.max}
            minVal={filtersState.ibu.min}
            onChangeMin={(val) =>
              changeFiltersState((prevState) => ({
                ...prevState,
                anyFiltersPresent: true,
                newFiltersApplied: !prevState.newFiltersApplied,
                ibu: {
                  ...prevState.ibu,
                  min: val,
                  selected: true,
                },
              }))
            }
            onChangeMax={(val) =>
              changeFiltersState((prevState) => ({
                ...prevState,
                anyFiltersPresent: true,
                newFiltersApplied: !prevState.newFiltersApplied,
                ibu: {
                  ...prevState.ibu,
                  max: val,
                  selected: true,
                },
              }))
            }
            minLimits={filtersBoundaries.ibu}
            maxLimits={filtersBoundaries.ibu}
            step={filtersBoundaries.ibu.step}
          />
          <PrimaryButtonNoBg onClick={resetFilters}>
            Reset filters
          </PrimaryButtonNoBg>
          <PrimaryButton onClick={toggleModal}>Apply filters</PrimaryButton>
        </FiltersMenuModal>
      )}
    </div>
  );
};

export default FiltersMenu;
