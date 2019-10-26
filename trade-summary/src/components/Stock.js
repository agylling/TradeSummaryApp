import React from 'react';

export default class Stock {
  constructor(name){
    this.name = name;
    this.amountOwned = 0.0;
    this.paid = 0.0;
    this.sharesBought = 0.0;
    this.sold = 0.0;
    this.sharesSold = 0.0;
    this.avgBought = 0.0;
    this.divident = 0.0;
    this.profit = 0.0;
    this.brokerage = 0.0;
  }

  addBuy = (amount, price, brokerage) => {
    // Handles free brokerage transactions
    brokerage = brokerage === '-' ? 0 : brokerage;
    this.paid += (parseFloat(price)*parseFloat(amount));
    this.sharesBought += parseFloat(amount);
    this.amountOwned += parseFloat(amount);
    this.avgBought = parseFloat(this.paid / this.sharesBought);
    this.brokerage += parseFloat(brokerage);
  }

  sell = (amount, price, brokerage) => {
    // Handles free brokerage transactions
    brokerage = brokerage === '-' ? 0 : brokerage;
    var tmpSold = -1 * parseFloat(amount) * parseFloat(price);
    this.amountOwned += parseFloat(amount);
    this.sharesSold += -1*parseFloat(amount);
    this.sold += tmpSold;
    this.brokerage += parseFloat(brokerage);
  }

  addDividents = (amount, divident) => {
    this.divident += parseFloat(amount)*parseFloat(divident);
  }

  getProfits = () => {
    var totalSold = parseFloat(this.sharesBought) < parseFloat(this.sharesSold) ?
      parseFloat(this.sharesBought) : parseFloat(this.sharesSold);
    this.profit = parseFloat(this.sold) - (totalSold*this.avgBought) + parseFloat(this.divident) - parseFloat(this.brokerage);
  }

  printInformation = () => {
    if(this.profit === 0){
      return null;
    }
    return (
      <tr>
        <td>{this.name}</td>
        <td>{this.sharesBought}</td>
        <td>{this.avgBought}</td>
        <td>{this.paid}</td>
        <td>{this.sharesSold}</td>
        <td>{parseFloat(parseFloat(this.sold)/parseFloat(this.sharesSold)).toFixed(2)}</td>
        <td>{this.sold}</td>
        <td>{this.divident}</td>
        <td>{this.brokerage}</td>
        <td>{this.profit}</td>
      </tr>
    );
  }

  roundDecimals = () => {
    this.amountOwned = parseFloat(this.amountOwned.toFixed(2));
    this.paid = parseFloat(this.paid.toFixed(2));
    this.sharesBought = parseFloat(this.sharesBought.toFixed(2));
    this.sold = parseFloat(this.sold.toFixed(2));
    this.sharesSold = parseFloat(this.sharesSold.toFixed(2));
    this.avgBought = parseFloat(this.avgBought.toFixed(2));
    this.divident = parseFloat(this.divident.toFixed(2));
    this.profit = parseFloat(this.profit.toFixed(2));
    this.brokerage = parseFloat(this.brokerage.toFixed(2));
  }
}

export const ShareSummary = (stock) => {
  return(
    stock.printInformation()
  );
}
/*<p> Bought a total of {stock.sharesBought} shares. </p>
<p> Average paid: {stock.avgBought},  at a total of  {stock.paid} <br/> </p>
<p> Sold a total of {stock.sharesSold} average sold for: {parseFloat(stock.sold / stock.sharesSold).toFixed(2)} </p>
<p> total: {stock.sold} <br/> received {stock.dividents} in dicidents </p>
<p> <br/> total brokerage payed: {stock.brokerage} <br/> Profits: {stock.profit} <br/><br/> </p> */
