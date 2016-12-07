const initialState = {
  actionList: ['look', 'buy', 'sell', 'keep'],
  curAction: 'look',
  curProfits: '0.00',
  curRound: 0,
  curIndex: 40,
  oriTotalMoney: 100,
  curTotalMoney: 100,
  buyClosePrice: 0,
  startValue: 0,
  endValue: 40
}

const root = (state = initialState, action) => {
  switch(action.type) {
    case 'RECEIVE_RAWDATA':
      return {
        ...state,
        rawData: action.rawData,
        curItem: action.curItem,
        kData: action.kData
      };
    case 'INIT_MYCHART':
      return {
        ...state,
        myChart: action.myChart
      };
    case 'USER_ACTION':
      if (state.myChart) {
        let { changeState } = action;
        changeState.startValue = state.startValue + 1;
        changeState.endValue = state.endValue + 1;
        changeState.curItem = state.rawData[action.changeState.curIndex];
        return Object.assign({}, state, changeState);
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default root;
