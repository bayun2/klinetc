this.state = {
  curProfits: '0.00',
  curCount: 0,
  oriTotalMoney: 100,
  curTotalMoney: 100,
  curItemIdx: 0,
  item: [
    [2320.26,2320.26,2287.3,2362.94],
    [2300,2291.3,2288.26,2308.38],
    [2295.35,2346.5,2295.35,2346.92],
    [2347.22,2358.98,2337.35,2363.8],
    [2360.75,2382.48,2347.89,2383.76],
    [2383.43,2385.42,2371.23,2391.82],
  ]
}



var getCurCount = (totalMoney, buyClosePrice) => {
  return totalMoney / buyClosePrice;
}

var getCurTotalMoeny = (curCount, sellClosePrice) => {
  return curCount * sellClosePrice;
}

var calProfits = (data) => {
  let curCount = getCurCount(data.totalMoney, data.buyClosePrice);
  let curTotalMoney =getCurTotalMoeny(curCount, data.sellClosePrice);
  let curProfits = (curTotalMoney / this.state.oriTotalMoney - 1) * 100;
  this.setState({
    curCount: curCount,
    curTotalMoeny: curTotalMoney,
    curProfits: curProfits,
    curItemIdx: data.curItemIdx+1,
    buyClosePrice: data.buyClosePrice
  })
}


$('.buy').add('.sell').on('click', () => {
  let data = {
    curItemIdx: this.state.curItemIdx,
    curTotalMoney: this.state.curTotalMoney,
    buyClosePrice: this.state.item[this.state.curItemIdx][1],
    sellClosePrice: this.state.item[this.state.curItemIdx+1][1]
  }
  calProfits(data);
})

$('.keep').on('click', () => {
  let data = {
    curItemIdx: this.state.curItemIdx,
    curTotalMoney: this.state.curTotalMoney,
    buyClosePrice: this.state.buyClosePrice,
    sellClosePrice: this.state.item[this.state.curItemIdx+1][1]
  }
  calProfits(data);
})
