let searchInputValue = "van";
let arr = ["Vanessa", "Eric", "vandam", "jack", "Alex"];

const displayCardsFromSearchField = () => {
  const re = new RegExp("^" + searchInputValue + ".*", "i");
  const arrtoDisplay = arr.filter((word) => word.match(re));
  return arrtoDisplay;
};

console.log(displayCardsFromSearchField());
