import axios from 'axios';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const hendleOnBlur = (e) => {
        const inpute = e.target.value
        setEmail(inpute)
    }
    const hendleMakeAdmin = () => {
        axios.put(`http://localhost:5000/user/${email}`)
            .then(function (res) {
            if (res.status === 200) {
                alert("Admin added !!!")
                rsetInput()
            }
            else {
                alert("Something is wrong !!!")
            }    
        })
    }
    const rsetInput = () => {
        document.getElementById("form-make-admin").reset();
    }
    return (
        <div className="row mt-4">
            <div className="col-lg-6 col-sm-12 mx-auto">
            <form id="form-make-admin">
                <div class="mb-3">
                    <label class="form-label">Enter Email Address</label>
                        <input type="email" class="form-control" placeholder="email" onBlur={hendleOnBlur}/>
                </div>
            </form>
                <button className="btn bg-info text-light" onClick={hendleMakeAdmin}>Make Admin</button>
            </div>
        </div>
    );
};

export default MakeAdmin;