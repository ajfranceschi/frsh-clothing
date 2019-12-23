import React from 'react';
import './shop.styles.sass';
import CollectionsOverview from '../../Components/CollectionsOverview/collections-overview.component';
import CollectionPage from '../Collection/Collection.component';
import { Route } from 'react-router-dom';
import WithSpinner from '../../Components/withSpinner/withSpinner.component';

// reselect
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching} from '../../redux/shop/shop.selectors';

//redux
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();

  }

  render() {
    const { match, isCollectionFetching } = this.props;

    return (
      <div className='shopPage'>
        <Route
          exact
          path={`${match.path}`}
          render={props => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}
        />
        {/*dynamically get the right category from the reducer so that it displays the correct page*/}
        {/*build pages using params. that are sent to the Category component*/}
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching : selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => {
  return {
    fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
