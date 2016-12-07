import React from 'react';
import { connect } from 'react-redux';
import IncomeInfoContainer from './IncomeInfoContainer';
import MainContainer from './MainContainer';
import UserOperateContainer from './UserOperateContainer';
import { getRawData } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getRawData());
  }

  render() {
    if (this.props.curItem) {
      return (
        <div>
          <IncomeInfoContainer />
          <MainContainer />
          <UserOperateContainer />
        </div>
      )
    } else {
      return <div></div>
    }
  }
}


App.defaultProps = {};

App.propTypes = {
  curItem: React.PropTypes.object,
  dispatch: React.PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  const { curItem, rawData } = state;
  return {
    curItem,
    rawData
  }
}

export default connect(mapStateToProps)(App)
