import ShopContext from "../lib/context"
import Image from "next/image";
import { useState,useEffect  } from "react";
import { useRouter } from 'next/router'

const MyOrders = () => {
  const router = useRouter()
  const [orderHistoryList, setOrderHistoryList ] = useState([]);
  

  useEffect(() => {
    if (localStorage.getItem('ORDERHISTORY')) setOrderHistoryList([JSON.parse(localStorage.getItem('ORDERHISTORY'))])
  }, [])
 
  return (
    <div className="orderlist">
      <div className="empty-order">
        {orderHistoryList.length == 0 && <Image src="/order.png" width={500} height={500} />}
        {orderHistoryList.length == 0 && <button onClick={() => router.push('/')}>Shop Now</button>}
        </div>
      {orderHistoryList.length > 0 && orderHistoryList.map((order, i) => {
        return <div key={i}>
          <p>{`Order ID: ${order.created}`}</p><br/>
        <h1>{order.line_items.data[0].description}</h1><br/>
        <h2>{`$${order.amount_total / 100}`}</h2><br/>
        <p>{`Address: ${order.customer_details.address.line1}`}</p>
        <p>{`${order.customer_details.address.city}, ${order.customer_details.address.postal_code}, ${order.customer_details.address.state}`}</p>
        <p>{`Email: ${order.customer_details.email}`}</p>
      </div>
      })}
    </div>
  )
}

export default MyOrders