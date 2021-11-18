import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React from 'react';
import Rating from 'react-rating';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const {user} = useAuth()
    const [reviewData, setReviewData] = useState({})
    const handleOnChange = e => {
        const fild = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...reviewData }
        newReviewData[fild] = value;
        newReviewData.name = user.displayName
        setReviewData(newReviewData)
    }
    const hendleSublit = () => {
        axios.post("https://fierce-dawn-14977.herokuapp.com/reviews", reviewData)
            .then(function (rsc) {
                if (rsc.status === 200) {
                alert("Review is add !!!")
            }
        })
    }
    return (
        <div>
            <div className="row">
                <div className="col-6 mx-auto mt-5">
                    <form>
                        <div class="mb-3">
                            <div className="mb-3">
                                <label class="form-label">Reviews</label>
                                <textarea type="email" class="form-control" placeholder="Enter your Reviews" name="review" onBlur={ handleOnChange}/>
                            </div>
                            <label class="form-label">Rating : </label>
                            <select className="ms-2" name="rating" onBlur={handleOnChange}>
                                <option value={null}>Select</option>
                                <option value="1">1 star</option>
                                <option value="2">2 star</option>
                                <option value="3">3 star</option>
                                <option value="4">4 star</option>
                                <option value="5">5 star</option>
                            </select>
                        </div>
                    </form>
                        <button className="btn bg-info text-light" onClick={hendleSublit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Review;