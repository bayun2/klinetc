import React from 'react';

class IncomeInfo extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let curProfitsClassName = 'down';
    if (this.props.curProfits > 0) {
      curProfitsClassName ='down red';
    } else if (this.props.curProfits < 0) {
      curProfitsClassName ='down green';
    }
    let curOpenPrice = this.props.curItem.series[0];
    let curClosePrice = this.props.curItem.series[1];
    let curLowestPrice = this.props.curItem.series[2];
    let curHighestPrice = this.props.curItem.series[3];
    return (
      <section className="income-info mui-flex">
  			<div className="profit fixed">
  				<div className="up">本局收益</div>
  				<div className={curProfitsClassName}>{this.props.curProfits}%</div>
  			</div>
  			<div className="cell">
  				<div className="mui-flex">
  					<div className="cell">
  						<div className="open">开：<span className={this.props.preClosePrice < curOpenPrice ? 'red' : 'green'}>{curOpenPrice}</span></div>
  						<div className="close">收：<span className={this.props.preClosePrice < curClosePrice ? 'red' : 'green'}>{curClosePrice}</span></div>
  					</div>
  					<div className="cell">
  						<div className="highest">高：<span className={this.props.preClosePrice < curHighestPrice ? 'red' : 'green'}>{curHighestPrice}</span></div>
  						<div className="lowest">低：<span className={this.props.preClosePrice < curLowestPrice ? 'red' : 'green'}>{curLowestPrice}</span></div>
  					</div>
  					<div className="cell">
  						<div className="updown">涨跌额：<span className={this.props.curItem.updown > 0 ? 'red' : 'green'}>{this.props.curItem.updown}</span></div>
  						<div className="updownratio">涨跌幅：<span className={this.props.curItem.updown > 0 ? 'red' : 'green'}>{this.props.curItem.updownratio}%</span></div>
  					</div>
  				</div>
  			</div>
  		</section>
    )
  }
}

IncomeInfo.defaultProps = {};

IncomeInfo.propTypes = {
  curItem: React.PropTypes.object,
  curProfits: React.PropTypes.string,
  preClosePrice: React.PropTypes.number
}

module.exports = IncomeInfo;
