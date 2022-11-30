import './MainMenu.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {api} from "../config";
import MenuItem from './MenuItem';

function MainMenu({cartItems,setCartItems}){
    const [items,setItems] = useState([]);

    useEffect(() => {

        const fetchItems = async() => {
          const result = await axios.get(api+"/item/all");
          setItems(result.data);
        }

        fetchItems();
    },[]);

    const handleClick = (clickedItem) => {
        const newCartItems = [...cartItems];
        const newItem = {
            ...clickedItem,
            qty:1
        }
        newCartItems.push(newItem);
        setCartItems(newCartItems);
    }
    return(
        <div className='main-menu-container'>
            {items.map((item) => {
                return <MenuItem key={item.id} item={item} onClick={() => {
                    handleClick(item);
                }}/>;
            })}
        </div>
    )
}
export default MainMenu;