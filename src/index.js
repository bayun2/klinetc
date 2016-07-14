import './index.less';

import React from 'react';
import ReactDom from 'react-dom';

import IncomeInfo from './incomeInfo';
import Main from './main';
import UserOperate from './userOperate';

import rawData from './data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actionList: ['look', 'buy', 'sell', 'keep'],
      curAction: 'look',
      curProfits: '0.00',
      curRound: 0,
      oriTotalMoney: 100,
      curTotalMoney: 100,
      buyClosePrice: 0,
      startValue: 0,
      endValue: 40
    }

    this.splitData = this.splitData.bind(this);
    this.initMyChart = this.initMyChart.bind(this);
    this.getData = this.getData.bind(this);
    this.userAction = this.userAction.bind(this);


  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.rawData = rawData;
    this.data = this.splitData(this.rawData);
    this.setState({
      curItem: this.rawData[0]
    })
  }

  userAction(changeState) {
    changeState.startValue = this.state.startValue + 1;
    changeState.endValue = this.state.endValue + 1;
    changeState.curItem = this.rawData[changeState.curRound];
    if (this.state.myChart) {
      this.setState(changeState);
      this.state.myChart.dispatchAction({
        type: 'dataZoom',
        startValue: changeState.startValue,
        endValue: changeState.endValue
      });
    }
  }

  initMyChart(myChart) {
    this.setState({
      myChart: myChart
    })
  }

  splitData(rawData) {
    var categoryData = [];
    var series = [];
    var volumeup = [];
    var volumedown = [];
    rawData.forEach(item => {
      categoryData.push(item.categoryData);
      series.push(item.series);
      if (item.updown > 0) {
        volumeup.push(item.volume);
        volumedown.push('-');
      } else {
        volumeup.push('-');
        volumedown.push(item.volume);
      }
    })
    return {
      categoryData: categoryData,
      series: series,
      volumeup: volumeup,
      volumedown: volumedown
    }
  }

  render() {
    if (this.state.curItem) {
      return (
        <div>
          <IncomeInfo
            curItem={this.state.curItem}
            curProfits={this.state.curProfits} />
          <Main
            data={this.data}
            initMyChart={this.initMyChart} />
          <UserOperate
            buyClosePrice={this.state.buyClosePrice}
            curAction={this.state.curAction}
            curRound={this.state.curRound}
            curTotalMoney={this.state.curTotalMoney}
            oriTotalMoney={this.state.oriTotalMoney}
            rawData={this.rawData}
            userAction={this.userAction} />
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

ReactDom.render(<App />, document.getElementById('J-activity'))
