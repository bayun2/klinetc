import fetch from 'isomorphic-fetch';

const splitData = rawData => {
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

export const getRawData = () => dispatch => {
  const url = `${location.protocol}//${location.host}/data/data.json`;
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      let rawData = json;
      let curItem = rawData[1];
      let kData  = splitData(rawData);
      dispatch({
        type: 'RECEIVE_RAWDATA',
        rawData,
        curItem,
        kData
      })
    }, e => {
      dispatch({
        type: 'RECEIVE_RAWDATA_Failed',
        message: e
      })
    })
}

export const initMyChart = myChart => {
  return {
    type: 'INIT_MYCHART',
    myChart
  }
}

export const userAction = changeState => {
  return {
    type: 'USER_ACTION',
    changeState
  }
}
