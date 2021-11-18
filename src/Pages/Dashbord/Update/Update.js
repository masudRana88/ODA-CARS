import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';

const Update = (props) => {
    const {cars, setCars} = props
    const { register, handleSubmit } = useForm();
    const [car, setCar] = useState({})
    const history = useHistory()
    const idName = useParams();
    const onSubmit = data => {
        axios.patch(`https://fierce-dawn-14977.herokuapp.com/car/${idName.id}`, data)
            .then(function (rsc) {
                if (rsc.status === 200) {
                    alert('Update successful !!')
                     setCars(cars.filter(car=> car._id !== idName.id))
                    history.goBack()

            }
        })
    };
    useEffect(() => {
        axios.get(`https://fierce-dawn-14977.herokuapp.com/car/${idName.id}`)
        .then(function (rsc) {
            if (rsc.status === 200) {
                setCar(rsc.data)
         }  
        })
    }, [idName.id])
    return (
        <div className="row">
            <div className="col-6 mx-auto mt-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3">
                    <label class="form-label">Car Model</label>
                    {car.model && <input defaultValue={car.model} class="form-control" {...register("model")} />}
                </div>
                <div class="mb-3">
                    <label class="form-label">Car Price</label>
                  { car.price && <input defaultValue={car.price} class="form-control" {...register("price")} />}
                </div>
                <div class="mb-3">
                    <label class="form-label">Car Discription</label>
                   {car.discription && <textarea defaultValue={car.discription} class="form-control" {...register("discription")} />}
                </div>
                <div class="mb-3">
                    <label class="form-label">Image Link</label>
                   {car.img && <input defaultValue={car.img} class="form-control" {...register("img")} />}
                </div>
                
                <input type="submit" value="Update" className="btn bg-info text-light" />
            </form>
            </div>
        </div>
    );
};

export default Update;