import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const Purchase = () => {
    const { idName } = useParams()
    const [car, setCar] = useState({});
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory()

    const onSubmit = data => {
        data.purchaseItem = car;
        data.status = "pending"
        axios.post("https://fierce-dawn-14977.herokuapp.com/order", data)
            .then(function (res) {
                if (res.status === 200) {
                    alert("Order Successful !!!")
                    history.push('/allcars')
                    reset()
                }
        })
    };
    useEffect(() => {
        axios.get(`https://fierce-dawn-14977.herokuapp.com/car/${idName}`)
        .then(function (response) {
            setCar(response.data)
        })
    },[idName])
    return (
        <div>
            <NavBar/>
            <div className="row container-fluid">
                {/* Car datails */}
                <div className="col-12 mt-3">
                    <div className="">
                        <div class="card">
                        <div class="card-body">
                            <divc className="row">
                                <div className="col-lg-3 col-sm-12 mb-2">
                                    <img src={car.img} style={{"height": "150px"}} />
                                </div>
                                <div className="col-lg-9 col-sm-12">
                                        <h5 class="card-title">{ car.model}</h5>
                                    <p class="card-text">{car.discription}</p>    
                                </div>
                            </divc>
                        </div>
                        </div>
                    </div>
                </div>
                {/* purchase form */}
                <div className="row">
                    <div className="col-6 mx-auto">
                        <h3 className="text-center mt-4">Please Fillup Ditails</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="mb-3">
                                <label class="form-label">Email Address</label>
                                <input className="form-control" type="email" defaultValue={ user.email} {...register("email")} />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input className="form-control" defaultValue={ user.name} {...register("name")} />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Phone</label>
                                <input className="form-control" type="number" {...register("phone")} />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Address</label>
                                <textarea  className="form-control"  {...register("address")} />
                            </div>
                            <input className="btn bg-info text-light" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Purchase;