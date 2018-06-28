import * as pageActions from '../actions/PageActions'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return {
    currentDay: state.currentDay,
    items: state.items,
    history: state.history,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export { mapStateToProps, mapDispatchToProps }