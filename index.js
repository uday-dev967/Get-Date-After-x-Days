const addDays = require("date-fns/addDays");

const result = (x) => {
  const y = addDays(new Date(2020, 7, 22), x);
  return `${y.getDate()}-${y.getMonth() + 1}-${y.getFullYear()}`;
};
module.exports = result;
