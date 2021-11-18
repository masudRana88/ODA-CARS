import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState('')

    const hendleStatus = (e, id) => {
        axios.put(`http://localhost:5000/order/${id}`, { status })
            .then(function (res) {
                if (res.status === 200) {
                setOrders(orders.filter(order=> order._id !== id))    
            }
        })
        e.preventDefault()
    }
    const hendleChange = (event) => {
        setStatus(event.target.value)
    }
    const statusStail = (status) => {
        if (status === 'pending') {
            return "text-info"
        }
        else if (status === 'shipped') {
            return "text-success"
        }
        else {
            return "text-danger"
        }
    }
    useEffect(() => [
        axios.get("http://localhost:5000/order")
        .then(function (rsc) {
            setOrders(rsc.data)
        })
    ], [orders])
    return (
        <div>
            {
                orders.map(order => <div key={order._id} class="card mt-4 shadow">
                    <div class="card-header">
                        <h5>User Email : {order.email}</h5> <h5>User Phone : {order.phone}</h5>
                    </div>
                        <div className="row">
                            <div className="col-2">
                                <img src={order.purchaseItem.img} style={{"height":"100%" ,"width": "100%"}} />
                            </div>
                            <div className="col-10">
                            <div class="card p-1">
                                <div class="card-body">
                                    <blockquote class="blockquote mb-0">
                                    <p>{ order.purchaseItem.model}</p>
                                    <footer class="blockquote-footer">
                                            { order.purchaseItem.discription}
                                    </footer>
                                    </blockquote>
                                    <h6 className={`${statusStail(order.status)}`}>{ order.status}</h6>
                                    <form action="">
                                        <select onChange={hendleChange}>
                                            <option value={null}>Select</option>
                                            <option value="pending">pending</option>
                                            <option value="shipped">shipped</option>
                                            <option value="rejected">rejected</option>
                                        </select>
                                        <input type="submit" value="update" className="ms-2" onClick={ (e)=>hendleStatus(e,order._id)}/>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ManageOrder;