export default class Pricing {
  constructor(amount, Currency) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a number');

    this._amount = amount;
    this._currency = Currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof val !== 'number') throw new TypeError('Amount must be a number');
    this._amount = val;
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    this._currency = val;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
    if (typeof conversionRate !== 'number') throw new TypeError('ConversionRate must be a number');
    return amount * conversionRate;
  }
}
