import getBudgetObject from './7-getBudgetObject';

/**
 * getFullBudgetObject - an object with computed budget
 * @param {*} income
 * @param {*} gdp
 * @param {*} capita
 * @returns an object
 */
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
