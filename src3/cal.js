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

rawData.forEach((item, idx, arr) => {
  if (idx === 0) return false;
  item.categoryData = item.datatime;
  //delete item.datatime
  item.updown = FloatSub(item.CLOSE_PRICE, arr[idx-1].CLOSE_PRICE);
  item.updownratio = floatTo(floatMul(FloatSub(floatDiv(item.CLOSE_PRICE, arr[idx-1].CLOSE_PRICE), 1), 100), 2)
  item.series = [item.OPEN_PRICE, item.CLOSE_PRICE, item.HIGH_PRICE, item.LOW_PRICE];
  // delete item.OPEN_PRICE
  // delete item.CLOSE_PRICE
  // delete item.HIGH_PRICE
  // delete item.LOW_PRICE
})

rawData.forEach((item) => {
  delete item.datatime
  delete item.OPEN_PRICE
  delete item.CLOSE_PRICE
  delete item.HIGH_PRICE
  delete item.LOW_PRICE
})

console.log(JSON.stringify(rawData))


function floatMul(arg1, arg2) {
  var m=0, s1=arg1.toString(), s2=arg2.toString();
  if(s1.indexOf('.') !== -1) {
    m += s1.split('.')[1].length;
  }
  if(s2.indexOf('.') !== -1) {
    m += s2.split('.')[1].length;
  }
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}

function floatDiv(arg1,arg2){
  var t1=0, t2=0, s1=arg1.toString(), s2=arg2.toString();
  if(s1.indexOf('.') !== -1) {
    t1 = s1.split('.')[1].length;
  }
  if(s2.indexOf('.') !== -1) {
    t2 = s2.split('.')[1].length;
  }
  return Number(s1.replace('.','')) / Number(s2.replace('.','')) * Math.pow(10, t2 - t1);
}

function FloatSub(arg1,arg2){
    var r1,r2,m,n;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    //动态控制精度长度
    n=(r1>=r2)?r1:r2;
    return ((arg1*m-arg2*m)/m).toFixed(n);
}

function floatTo(val, n) {
  var n = n ? n : 2;
  var power = Math.pow(10, n);
  var fixed = (Math.round(floatMul(val, power)) / power).toString();
  if (n === 0) {
    return fixed;
  }
  if (fixed.indexOf('.') < 0) {
    fixed += '.';
  }
  var padding = n + 1 - (fixed.length - fixed.indexOf('.'));
  for (var i = 0; i < padding; i++) {
    fixed += '0';
  }
  return fixed;
}
