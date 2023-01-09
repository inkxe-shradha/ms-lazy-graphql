import React from "react";
import { getAverageOfTariff } from "../../utils/getAverage";

const HotelBanner = ({ hotel }) => {
  return (
    <div className="header-banner">
      <div className="row">
        <div className="col-md-6">
          <h1>{hotel?.name}</h1>
        </div>
        <div className="col-md-6">
          <h2 className="room-price text-end">
            ${getAverageOfTariff(hotel?.tariff.map((ele) => ele.tariff) || [])}{" "}
            {hotel?.tariff.length === 0 ? (
              <span className="text-warning">/ No Room Available</span>
            ) : (
              <span>/ Per Night</span>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HotelBanner;
