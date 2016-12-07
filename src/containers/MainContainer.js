import { connect } from 'react-redux';
import Main from '../components/Main';
import { initMyChart } from '../actions';

const mapStateToProps = state => {
  const { kData } = state;
  return {
    kData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initMyChart: myChart => {
      dispatch(initMyChart(myChart))
    }
  }
}

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default MainContainer;
