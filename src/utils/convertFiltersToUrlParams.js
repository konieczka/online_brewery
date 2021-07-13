const convertFiltersToUrlParams = (filterset) => {
  let result = "&";

  if (filterset.abv.selected) {
    result += `abv_gt=${filterset.abv.min}&abv_lt=${filterset.abv.max}&`;
  }

  if (filterset.ibu.selected) {
    result += `ibu_gt=${filterset.ibu.min}&ibu_lt=${filterset.ibu.max}&`;
  }

  if (filterset.search.selected) {
    result += `beer_name=${filterset.search.value}&`;
  }

  return result;
};

export default convertFiltersToUrlParams;
