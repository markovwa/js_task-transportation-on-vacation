const LONG_TERM = 7;
const SHORT_TERM = 3;
const MID_TERM = 6;
const STANDART_PRICE = 80;
const GOOD_PRICE = 220;
const BEST_PRICE = 230;
const LOW_PRICE = 100;


function calculateRentalCost(days) {
  if (days === LONG_TERM) {
    return BEST_PRICE;
  }

  if (days === MID_TERM) {
    return GOOD_PRICE;
  }

  if (days === SHORT_TERM) {
    return LOW_PRICE;
  }

  return STANDART_PRICE;
}

module.exports = calculateRentalCost;
