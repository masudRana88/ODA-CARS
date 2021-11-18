import axios from 'axios';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from 'react';
import "./Comments.css"
const Comments = () => {
    const [comments, setComments] = useState([])
    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
    };
    useEffect(() => {
        axios.get('https://fierce-dawn-14977.herokuapp.com/reviews')
            .then(function (rsc) {
            setComments(rsc.data)
        })
    },[])
    return (
        <div className="container">
            <h4 className="text-center mt-5 mb-5">What Our clients say..</h4>
            <Carousel responsive={responsive}>
                {comments.map(comment => <div>
                    <div class="card m-2" >
                    <img src="https://www.computerhope.com/jargon/g/guest-user.jpg" class="card-img-top rounded-circle card-ing" alt="..."/>
                    <div class="card-body">
                        <h5 className="text-center">{ comment.name}</h5>
                        <p class="card-text">{ comment.review.slice(0, 150)}...</p>
                    </div>
                    </div>
                </div>)}
            </Carousel>
        </div>
    );
};

export default Comments;