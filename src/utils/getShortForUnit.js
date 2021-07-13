const getShortForUnit = (unit) => {
  switch (unit) {
    case "grams":
      return "g";
    case "kilograms":
      return "kg";
    default:
      return unit;
  }
};

export default getShortForUnit;
