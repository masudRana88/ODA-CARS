import React from 'react';

const MakeAdmin = () => {
    return (
        <div className="row mt-4">
            <div className="col-lg-6 col-sm-12 mx-auto">
            <form id="form-make-admin">
                <div class="mb-3">
                    <label class="form-label">Enter Email Address</label>
                    <input type="text" class="form-control" placeholder="email" name="model"/>
                </div>
            </form>
                <button className="btn bg-info">Make Admin</button>
            </div>
        </div>
    );
};

export default MakeAdmin;