const convertFiltersToUrlParams = (filterset) => {
  let result = "&";
  const appliedFilters = [];

  if (filterset.abv.selected) {
    appliedFilters.push(
      `abv_gt=${filterset.abv.min}&abv_lt=${filterset.abv.max}&`
    );
  }

  if (filterset.ibu.selected) {
    appliedFilters.push(
      `ibu_gt=${filterset.ibu.min}&ibu_lt=${filterset.ibu.max}&`
    );
  }

  return result.concat(appliedFilters);
};

export default convertFiltersToUrlParams;
