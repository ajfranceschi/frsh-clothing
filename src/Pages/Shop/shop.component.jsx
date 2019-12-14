import React from 'react';
import './shop.styles.sass';
import CollectionsOverview from '../../Components/CollectionsOverview/collections-overview.component';
import CollectionPage from '../Collection/Collection.component';
import { Route } from 'react-router-dom';
import WithSpinner from '../../Components/withSpinner/withSpinner.component';

// FireStore
import { convertCollectionSnapshotToMap, firestore } from '../../firebase/firebase.utils';

//redux
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  //the the unsubscribeFromSnapshot() to null to be used when we need to unsubscribe from the Snapshot listener
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className='shopPage'>
        <Route
          exact
          path={`${match.path}`}
          render={props => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}
        />
        {/*dynamically get the right category from the reducer so that it displays the correct page*/}
        {/*build pages using params. that are sent to the Category component*/}
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />}
        />
        {/*TODO: force collectionId toLowercase*/}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
