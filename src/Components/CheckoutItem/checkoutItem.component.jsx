import React from 'react';
import './checkoutItem.styles.scss';
import { connect } from 'react-redux';
import { removeItemFromCart, decreaseItemQuantity, increaseItemQuantity } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, decreaseQuantity, increaseQuantity }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkoutItem'>
            <div className='imageContainer'>
                <img alt='Item' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <button className='decreaseArrow' onClick={() => decreaseQuantity(cartItem)}> &#10094;</button>
                {quantity}
                <button className='increaseArrow' onClick={() => increaseQuantity(cartItem)}>&#10095;</button>
            </span>
            <span className='price'>${price}</span>
            <div className='removeButton' onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        clearItem: item => dispatch(removeItemFromCart(item)),
        decreaseQuantity: item => dispatch(decreaseItemQuantity(item)),
        increaseQuantity: item => dispatch(increaseItemQuantity(item))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);
