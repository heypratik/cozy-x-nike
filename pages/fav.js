import ShopContext from "../lib/context"
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from 'next/router'


const Fav = () => {
    const router = useRouter()


    function notify() {
        toast.success("Added to cart");
    }
    const { favItems, onAdd, cartItems } = useContext(ShopContext);


    const ss = favItems.map(item => (
        <div className="wish-parent" key={item.slug}>
            <div>
                <img className="prod-img" width={300} src={item.image.data.attributes.formats.medium.url} alt={item.title} />
            </div>  
            <div className="wish-detail-cont">
                <h1>{item.title}</h1>
                <h2>${item.price}</h2>
                <p>{item.description}</p>
                <button
                    onClick={() => {
                        onAdd(item, 1, item.slug);
                        notify();
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    ))

    return (

        <div className="favPage">

            {favItems.length == 0 && <Image src="/we.png" width={500} height={500} />}
{favItems.length == 0 &&<button onClick={() => router.push('/')}>Shop Now</button>}
            
            {ss}
        </div>
    )
}

export default Fav
