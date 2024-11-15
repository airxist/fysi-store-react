export const constructQuery = (searchParam: string) => {
  const queryObject: { [key: string]: any } = {};

  searchParam
    .slice(1)
    .split("&")
    .map((query) => {
      let [searchInput, input] = query.split("=");
      queryObject[searchInput] = input;
    });

  return queryObject;
};
