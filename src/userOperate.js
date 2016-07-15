import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class UserOperate extends React.Component {
  constructor(props) {
    super(props);

    this.userAction = this.userAction.bind(this);
    this.getCurCount = this.getCurCount.bind(this);
    this.getCurTotalMoeny = this.getCurTotalMoeny.bind(this);
    this.calProfits = this.calProfits.bind(this);
    this.floatMul = this.floatMul.bind(this);
    this.floatDiv = this.floatDiv.bind(this);
    this.floatTo = this.floatTo.bind(this);
  }

  floatMul(arg1, arg2) {
    var m=0, s1=arg1.toString(), s2=arg2.toString();
    if(s1.indexOf('.') !== -1) {
      m += s1.split('.')[1].length;
    }
    if(s2.indexOf('.') !== -1) {
      m += s2.split('.')[1].length;
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
  }

  floatDiv(arg1,arg2){
    var t1=0, t2=0, s1=arg1.toString(), s2=arg2.toString();
    if(s1.indexOf('.') !== -1) {
      t1 = s1.split('.')[1].length;
    }
    if(s2.indexOf('.') !== -1) {
      t2 = s2.split('.')[1].length;
    }
    return Number(s1.replace('.','')) / Number(s2.replace('.','')) * Math.pow(10, t2 - t1);
  }

  floatTo(val, n) {
    var n = n ? n : 2;
    var power = Math.pow(10, n);
    var fixed = (Math.round(this.floatMul(val, power)) / power).toString();
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

  // 不要保留小数，不然计算会出现较大偏差
  getCurCount(totalMoney, buyClosePrice) {
    return totalMoney/buyClosePrice;
  }

  getCurTotalMoeny(curCount, sellClosePrice) {
    return this.floatTo(this.floatMul(curCount, sellClosePrice), 2);
  }

  calProfits(data) {
    let curCount = this.getCurCount(data.curTotalMoney, data.buyClosePrice);
    let curTotalMoney = this.getCurTotalMoeny(curCount, data.sellClosePrice);
    let curProfits = this.floatTo((this.floatDiv(curTotalMoney, this.props.oriTotalMoney) - 1) * 100, 2);

    this.props.userAction({
      curAction: data.curAction,
      curTotalMoeny: curTotalMoney,
      curProfits: curProfits,
      curIndex: data.curIndex+1,
      curRound: data.curRound+1,
      buyClosePrice: data.buyClosePrice
    });
  }

  userAction(curAction) {
    if (this.props.curRound === 30) {
      alert('游戏已经结束');
      return false;
    }
    if (curAction === 'look' || curAction === 'sell') {
      this.props.userAction({
        curAction: 'look',
        curIndex: this.props.curIndex+1,
        curRound: this.props.curRound+1
      });
    } else { // buy, keep
      let data = {
        curAction: curAction,
        curIndex: this.props.curIndex,
        curRound: this.props.curRound,
        curTotalMoney: this.props.curTotalMoney,
        buyClosePrice: this.props.rawData[this.props.curIndex].series[1],
        sellClosePrice: this.props.rawData[this.props.curIndex+1].series[1]
      }
      if (curAction === 'keep') {
        data.buyClosePrice = this.props.buyClosePrice;
      }
      this.calProfits(data);
    }
  }

  renderBtn() {
    switch(this.props.curAction) {
      case 'look':
      case 'sell':
        return {
          first: <a className="buy btn" onTouchTap={() => {
            this.userAction('buy')
          }}>买入</a>,
          last: <a className="keep btn" onTouchTap={() => {
            this.userAction('look')
          }}>观望</a>
        };
        break;
      case 'buy':
      case 'keep':
        return {
          first: <a className="buy btn" onTouchTap={() => {
            this.userAction('keep')
          }}>持股</a>,
          last: <a className="keep btn" onTouchTap={() => {
            this.userAction('sell')
          }}>卖出</a>
        };
        break;
      default:
        return {
          first: <a className="buy btn" onTouchTap={() => {
            this.userAction('buy')
          }}>买入</a>,
          last: <a className="keep btn" onTouchTap={() => {
            this.userAction('look')
          }}>观望</a>
        };
    }
  }

  render() {
    let actionBtn = this.renderBtn();
    return (
      <section className="user-operate mui-flex">
  			<div className="cell">
          {actionBtn.first}
  			</div>
  			<div className="cell">
  				<div className="round">
  					<div>结算</div>
  					<div>{this.props.curRound}/30</div>
  				</div>
  			</div>
  			<div className="cell">
          {actionBtn.last}
  			</div>
  		</section>
    )
  }
}

UserOperate.defaultProps = {};

UserOperate.propTypes = {
  buyClosePrice: React.PropTypes.number,
  curAction: React.PropTypes.string,
  curIndex: React.PropTypes.number,
  curRound: React.PropTypes.number,
  curTotalMoney: React.PropTypes.number,
  oriTotalMoney: React.PropTypes.number,
  rawData: React.PropTypes.array,
  userAction: React.PropTypes.func
}

module.exports = UserOperate;
