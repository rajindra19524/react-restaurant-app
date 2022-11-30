import './Cart.css';
import CartItem from './CartItem';

function Cart({cartItems,setCartItem}){
    return(
        <div className='cart-container'>
            <h2>Your order</h2>

            <div className='cart-items'>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} item={item}/>
                })}
            </div>
        </div>
    )
}
export default Cart;