import React, {createContext, useContext, useState} from "react";
import { useUser } from "@auth0/nextjs-auth0";
import toast from "react-hot-toast";



const ShopContext = createContext()

export const StateContext =({children}) => {

    const { user, error, isLoading } = useUser();

    const [qty, setQty] = useState(1)
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [favItems, setFavItems] = useState([])
    const [orderHistoryList, setOrderHistoryList] = useState([''])

    function addQty() {
        setQty(prevQty => prevQty + 1)
    }

    function reduceQty() {
        if (qty === 1) {
            return 
        } else {
            setQty(prevQty => prevQty - 1)
        }
    }

    function onAdd(product, quantity, wishListRemove) {

        setFavItems(prevState => prevState.filter(item => item.slug !== wishListRemove))

        setTotalPrice(prevToal => prevToal + product.price * quantity)

        setTotalQuantity(prevToal => prevToal + quantity)

        const exists = cartItems.find((item) => item.slug === product.slug)
        if (exists) {
                setCartItems(cartItems.map((item) => 
                    item.slug === product.slug ? {...exists, quantity: exists.quantity + quantity} : item
                ))
        } else {
            setCartItems([...cartItems, {...product, quantity: quantity}])
        }
    }

    function onRemove(product) {

        setTotalPrice(prevToal => prevToal - product.price)
        
        setTotalQuantity(prevToal => prevToal - 1)

        const exists = cartItems.find((item) => item.slug === product.slug)
        if (exists.quantity === 1) {
            setCartItems(cartItems.filter(item => item.slug !== product.slug))
        } else {
            setCartItems(cartItems.map((item) => item.slug === product.slug ? {...exists, quantity: exists.quantity -1} : item ))
        }

    }

    function setWishList(wishList) {
        if (!user) {
            return toast.error('Login to use wish list')
        }
        if (favItems.length === 0) {
            setFavItems(prevState => [...prevState, wishList])
        } else {
            for(let list of favItems) {
             if (list.slug === wishList.slug) {
                return setFavItems(prevState => prevState.filter(item => item.slug !== wishList.slug))
             }
        }
        setFavItems(prevState => [...prevState, wishList])
            
        }
    }
  
    return (
        <ShopContext.Provider value={{qty, addQty, reduceQty, onAdd, cartItems, setShowCart, showCart, onRemove, totalQuantity, totalPrice, setQty, favItems, setFavItems, setWishList,orderHistoryList, setOrderHistoryList}}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContext