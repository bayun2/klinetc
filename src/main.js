import React from 'react';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/candlestick';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/axis';

class UserOperate extends React.Component {
  constructor(props) {
    super(props);

    this.calculateMA = this.calculateMA.bind(this);
  }

  componentDidMount() {
    const option = {
      backgroundColor: '#fff',
      grid: [
        {
          left: '10%',
          right: '8%',
          top: '10%',
          height: '50%'
        },
        {
          left: '10%',
          right: '8%',
          bottom: '10%',
          height: '16%'
        }
      ],
      xAxis: [
        {
          type: 'category',
          data: this.props.data.categoryData,
          scale: true,
          boundaryGap : false,
          axisLine: {onZero: false},
          axisLabel: {show: false},
          axisTick: {show: false},
          splitLine: {show: false},
          splitNumber: 20,
          min: 'dataMin',
          max: 'dataMax'
        },
        {
          type: 'category',
          gridIndex: 1,
          data: this.props.data.categoryData,
          scale: true,
          boundaryGap : false,
          axisLine: {onZero: false},
          axisLabel: {show: false},
          axisTick: {show: false},
          splitLine: {show: false},
          splitNumber: 20,
          min: 'dataMin',
          max: 'dataMax'
        }
      ],
      yAxis: [
        {
          scale: true,
          splitArea: {show: true},
          axisLine: {show: false}
        },
        {
          gridIndex: 1,
          scale: true,
          splitNumber: 2,
          axisLine: {show: false},
          axisLabel: {show: false},
          axisTick: {show: false},
          splitLine: {show: false}
        }
      ],
      dataZoom: [
        {
          show: false,
          xAxisIndex: [0, 1],
          startValue: 0,
          endValue: 40
        }
      ],
      series: [
          {
              name: '日K',
              type: 'candlestick',
              data: this.props.data.series,
              itemStyle: {
                normal: {
                  color: '#c12e34',
                  color0: '#2b821d',
                  borderColor: '#c12e34',
                  borderColor0: '#2b821d'
                }
              },
              markLine: {
                symbol: ['none', 'none'],
                label: {
                  normal: {
                    position: 'middle'
                  }
                },
                data: [
                  {
                    type: 'min',
                    valueDim: 'lowest'
                  },
                  {
                    type: 'max',
                    valueDim: 'highest'
                  }
                ]
              }
          },
          {
              name: 'MA5',
              type: 'line',
              data: this.calculateMA(5),
              smooth: true,
              lineStyle: {
                  normal: {opacity: 0.5}
              }
          },
          {
              name: 'MA10',
              type: 'line',
              data: this.calculateMA(10),
              smooth: true,
              lineStyle: {
                  normal: {opacity: 0.5}
              }
          },
          {
              name: 'MA20',
              type: 'line',
              data: this.calculateMA(20),
              smooth: true,
              lineStyle: {
                  normal: {opacity: 0.5}
              }
          },
          {
              name: 'MA30',
              type: 'line',
              data: this.calculateMA(30),
              smooth: true,
              lineStyle: {
                  normal: {opacity: 0.5}
              }
          },
          {
            name: 'volumeup',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: this.props.data.volumeup,
            stack: 'volume',
            barCategoryGap: '40%',
            itemStyle: {
              normal: {
                color: '#c12e34',
                borderColor: '#c12e34'
              }
            },
          },
          {
            name: 'volumedown',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: this.props.data.volumedown,
            stack: 'volume',
            barCategoryGap: '40%',
            itemStyle: {
              normal: {
                color: '#2b821d',
                borderColor: '#2b821d'
              }
            },
          }
      ]
    };
    let myChart = echarts.init(document.getElementById('J-main'));
    myChart.setOption(option)
    this.props.initMyChart(myChart);
  }

  calculateMA(dayCount) {
    var result = [];
    for (var i = 0, len = this.props.data.series.length; i < len; i++) {
      if (i < dayCount) {
        result.push('-');
        continue;
      }
      var sum = 0;
      for (var j = 0; j < dayCount; j++) {
        sum += this.props.data.series[i - j][1];
      }
      result.push(sum / dayCount);
    }
    return result;
  }

  render() {
    return (
      <section className="main" id="J-main" ></section>
    )
  }
}

UserOperate.defaultProps = {};

UserOperate.propTypes = {
  data: React.PropTypes.object,
  initMyChart: React.PropTypes.func
}

module.exports = UserOperate;
