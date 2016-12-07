import { connect } from 'react-redux';
import IncomeInfo from '../components/IncomeInfo';

const mapStateToProps = state => {
  const { curItem, curProfits, preClosePrice} = state;
  return {
    curItem,
    curProfits,
    preClosePrice
  }
}

const IncomeInfoContainer = connect(mapStateToProps)(IncomeInfo);

export default IncomeInfoContainer;
