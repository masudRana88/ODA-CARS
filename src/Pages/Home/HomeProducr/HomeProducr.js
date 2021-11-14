import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeProducr = () => {
    const [cars , setCars] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allcar')
            .then(rsc => rsc.json())
        .then(data => setCars(data))
    },[])
    console.log(cars)
    return (
    <div className="container mt-5">
        <p className="text-center">--Top Reted deal--</p>
        <h1 className="text-center mb-5">Explor our Top Deals</h1>    
        <div class="row row-cols-lg-3 row-cols-sm-1 g-4">
            {
            cars.slice(0,6).map(car => <div className="">
            <div class="col">
                <div class="card shadow">
                 <img style={{"height" : "300px"}} src={car.img }/>
                <div class="card-body">
                       <h5 class="card-title">{ car.model}</h5>
                       <p class="card-text">{car.discription}</p>
                       <Link to={`/purchase/${car._id}`}><button className="btn bg-info">Buy Now</button></Link>  
                </div> 
                </div>
            </div>        
            </div>)        
            }
        </div>
    </div>
    );
};

export default HomeProducr;