import React from 'react';
import './shop.styles.sass';
import CollectionsOverviewContainer from '../../Components/CollectionsOverview/collections-overview.container';
import CollectionPageContainer from '../Collection/Collection.container';
import { Route } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className='shopPage'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        {/*dynamically get the right category from the reducer so that it displays the correct page*/}
        {/*build pages using params. that are sent to the Category component*/}
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
