import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    // const [id, setId] = useState('');
    const { user ,isLoding } = useAuth()
   
    const hendleDeletBtn = (orderID) => {
        axios.delete(`https://fierce-dawn-14977.herokuapp.com/order/${orderID}`)
            .then(function (rsc) {
                if (rsc.status === 200) {
                    const newOrders = orders.filter(order => order._id !== orderID)
                    setOrders(newOrders)
                alert('Order is Cancled !!!')
            }
        })
    }
    useEffect(() => {
        axios.get(`https://fierce-dawn-14977.herokuapp.com/order/${user.email}`)
            .then(function (res) {
            setOrders(res.data)
        })
    }, [])
    return (
        <div>
            {
                orders.length? <div className="row">
                <div className="col-11 mx-auto">
                    {
                        orders.map(order=><div key={order._id} class="card mt-4 shadow">
                        <div className="row">
                            <div className="col-lg-2 col-sm-5 ">
                                <img src={order?.purchaseItem?.img} style={{"height":"100%" ,"width": "100%"}} />
                            </div>
                            <div className="col-lg-10 col-sm-7">
                            <div class="card p-1">
                                <div class="card-body">
                                    <blockquote class="blockquote mb-0">
                                    <p>
                                        {order.purchaseItem.model}
                                    </p>
                                    <footer class="blockquote-footer">
                                         {order.purchaseItem.discription}  
                                    </footer>
                                    </blockquote>
                                    <button className="btn mt-2 border" onClick={()=>hendleDeletBtn(order._id)}> Cancle Order</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                    }
                </div>
                </div> : <div>
                       <h3 className="text-center">(empty)</h3>
            </div>
            }
        </div>
    );
};

export default MyOrder;