import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useRouteMatch,Switch,Route} from 'react-router-dom';
import Update from '../Update/Update';

const ManageCar = () => {
    const [cars, setCars] = useState([])
    let { path, url } = useRouteMatch();
    const handleDelete = (id) => {
        axios.delete(`https://fierce-dawn-14977.herokuapp.com/car/${id}`)
            .then(function (res) {
            if (res.status === 200) {
                alert("Delete Sucessfull !!")
                setCars(cars.filter(car=> car._id !== id))
            }
        })
    }
    useEffect(() => {
        axios.get("https://fierce-dawn-14977.herokuapp.com/allcar")
        .then(function (res) {
            setCars(res.data)
        })
    }, [cars])
    return (
        <div>
            <Switch>
                <Route exact path={path}>
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
                            <Link to={`${path}/update/${car._id}`}>
                                <button className="btn bg-info m-1 text-light">Update</button>        
                            </Link>
                            <button className="btn bg-danger text-light m-1" onClick={()=>handleDelete(car._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
            </div>
                </Route>
                <Route path={`${path}/update/:id`}>
                    <Update cars={cars} setCars={setCars}></Update>
                </Route>
            </Switch>
            
        </div>
    );
};

export default ManageCar;