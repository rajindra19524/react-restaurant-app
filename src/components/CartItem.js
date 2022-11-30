import './Cart.css';
import { IconButton } from '@chakra-ui/react';
import {api} from '../config';
import {AddIcon, CloseIcon, DeleteIcon} from '@chakra-ui/icons';


function CartItem({item}){
    return(
        <div classname="cart-item-container">
            <img src={`${api}${item.image}`} alt=""/>

            <div className="cart-item-details">
                <h3 classname="cart-item-title">{item.name}</h3>
                <h5 className="cart-item-price">{item.price}</h5>
            </div>

            <div className='add-delete-btns'>
                <IconButton
                size="sm"
                colorScheme="blue"
                icon={<AddIcon w={3} h={3}/>}
                />

                <IconButton
                size="sm"
                colorScheme="yellow"
                icon={<CloseIcon w={3} h={3}/>}
                />
            </div>

            <IconButton
            colorScheme="red"
            icon={<DeleteIcon/>}
            />
        </div>
    )
}
export default CartItem;