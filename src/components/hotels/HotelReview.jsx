import React, { Fragment } from "react";
import ReactStars from "react-rating-stars-component";

const HotelReview = ({ ratings }) => {
  console.log(ratings);
  return (
    <div className="row mb-4">
      <div className="col-md-8 offset-md-2">
        <h3 className="mb-3">Room Review</h3>
        <div className="row">
          {ratings && ratings.length === 0 && (
            <div className="col-md-12">
              <p className="note note-info">
                No Comments Added. Please add your comment below. We love to
                here from you.
              </p>
            </div>
          )}
          {ratings &&
            ratings.map((ele) => (
              <Fragment key={ele.id}>
                <div className="row mb-3">
                  <div className="col-md-2 border-end profile-image-div">
                    <img
                      src={`https://source.unsplash.com/random/80X80?profile=${ele.id}`}
                      className="img-fluid rounded-circle profile-image"
                      alt=""
                    />{" "}
                  </div>
                  <div className="col-md-10">
                    <div className="review-content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="review-title">
                          <span>27 Aug 2022</span>
                          <h6>{ele.reviewer}</h6>
                        </div>
                        <div className="reviwer-rating">
                          <ReactStars
                            count={5}
                            value={ele.rating}
                            idHalf
                            size={24}
                            edit={false}
                            activeColor="#ffd700"
                          />
                        </div>
                      </div>
                      <p>{ele.comments}</p>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HotelReview;
