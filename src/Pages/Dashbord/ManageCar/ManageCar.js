import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageCar = () => {
    const [cars, setCars] = useState([])
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/car/${id}`)
            .then(function (res) {
            if (res.status === 200) {
                alert("Delete Sucessfull !!")
                setCars(cars.filter(car=> car._id !== id))
            }
        })
    }
    useEffect(() => {
        axios.get("http://localhost:5000/allcar")
        .then(function (res) {
            setCars(res.data)
        })
    }, [])
    console.log(cars)
    return (
        <div>
            {
                cars.map(car => <div className="col-lg-10 col-sm-12 mt-2 ms-2 mb-2 shadow-lg ">
                    <div class="card">
                        <div className="row">
                            <div className="col-2">
                                <div className="my-2 mx-2">
                                    <img src={car.img} style={{"height": "100%", "width" : "100%"}}/>
                                </div>
                            </div>
                            <div className="col-10">
                                <div class="card-body">
                                    <h5 class="card-title">{car.model}</h5>
                                    <h6>Price: { car.price}</h6>
                                    <p class="card-text">
                                        { car.discription}
                                    </p>
                                </div>
                                <button className="btn bg-info m-1 text-light">Update</button>
                            <button className="btn bg-danger text-light m-1" onClick={()=>handleDelete(car._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default ManageCar;