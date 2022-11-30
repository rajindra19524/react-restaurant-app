import './Home.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../components/Logo';
import { Button} from '@chakra-ui/react'
import MainMenu from '../components/MainMenu';
import Cart from '../components/Cart';
function Home(){

    const [cartItems,setCartItems] = useState([]);
    return(
        <div className='home-container'>
            <div className='home-nav'>
                <Logo/>
                <div>
                    <Link to="/login">
                        <Button colorScheme="blue" variant="outline">Login</Button>
                    </Link>

                    <Link to="/Register">
                        <Button colorScheme="yellow" variant="outline">Register</Button>
                    </Link>
                </div>
            </div>
            
            <div className='home-inner-container'>
                <MainMenu cartItems={cartItems} setCartItems={setCartItems}/>
                <Cart cartItems={cartItems} setCartItems={setCartItems}/>
            </div>
        </div>
    )
}
export default Home;