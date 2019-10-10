import React from 'react';
import CustomButton from '../CustomButton/customButton.component';
import './cartDropdown.styles.sass';
import CartItem from '../CartItem/cartItem.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems, history }) => {
    return (
        <div className='cartDropdownDiv'>
            <div className='cartItems'>
                {cartItems.length ? (
                    cartItems.map(item => <CartItem key={item.id} item={item} />)
                ) : (
                    <span className='cartEmptyMessage'>Your cart is empty</span>
                )}
            </div>
            <CustomButton onClick={() => history.push('/checkout')}>Go To Checkout</CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
