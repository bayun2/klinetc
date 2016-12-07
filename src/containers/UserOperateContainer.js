import { connect } from 'react-redux';
import UserOperate from '../components/UserOperate';
import { userAction } from '../actions';

const mapStateToProps = state => {
  const { buyClosePrice, curAction,
    curIndex, curRound,
    curTotalMoney, oriTotalMoney, rawData } = state;
  return {
    buyClosePrice,
    curAction,
    curIndex,
    curRound,
    curTotalMoney,
    oriTotalMoney,
    rawData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userAction: changeState => {
      dispatch(userAction(changeState))
    }
  }
}


const UserOperateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserOperate);

export default UserOperateContainer;
