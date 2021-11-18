import axios from 'axios';
import React, { useState } from 'react';

const UplodeCar = () => {
    const [car, setCar] = useState({});
    const handleUplodecar = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...car };
        newData[field] = value;
        setCar(newData)
    }
    const hendleUplode = () => {
        axios.post('https://fierce-dawn-14977.herokuapp.com/uplodcar', car)
            .then(function (response) {
                if (response.status === 200) {
                    alert("Uplode successfull")
                    rsetInput()
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    const rsetInput = () => {
        document.getElementById("create-course-form").reset();
    }
    return (
        <div className="row mt-4">
            <div className="col-lg-6 col-sm-12 mx-auto">
            <form id="create-course-form">
                <div class="mb-3">
                    <label class="form-label">Car Model Name</label>
                    <input type="text" class="form-control" placeholder="Type Car Model" name="model" onBlur={ handleUplodecar}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Car Price</label>
                    <input type="text" class="form-control" placeholder="Type Car Price" name="price" onBlur={ handleUplodecar}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Car Details</label>
                    <textarea type="text" class="form-control" placeholder="Type Car Details" name="discription" onBlur={ handleUplodecar}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Image Link</label>
                    <input type="text" class="form-control" placeholder="Enter image link" name="img" onBlur={ handleUplodecar}/>
                </div>
            </form>
                <button className="btn bg-info" onClick={hendleUplode}>Uplode</button>
            </div>
        </div>
    );
};

export default UplodeCar;