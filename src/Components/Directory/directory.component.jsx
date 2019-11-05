import React from 'react';
import MenuItem from '../MenuItem/menuItem.component';
import './directory.styles.sass';
import { connect } from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';

const Directory = ({ sections }) => {
    //  USING ES6 SPREAD OPERATOR
    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...otherSectionProps }) => {
                return <MenuItem key={id} {...otherSectionProps} />;
            })}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
