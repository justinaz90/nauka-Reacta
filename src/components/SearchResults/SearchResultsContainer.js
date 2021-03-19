import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {
  createAction_changeSearchString,
  getSearchedCardsForColumn,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;
  return {
    cards: getSearchedCardsForColumn(state, searchString),
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
