import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./hotel.scss";
import TariffTable from "./TariffTable";

const HotelRoomsList = ({ data, loading }) => {
  const navigate = useNavigate();
  return (
    <div className="row gx-5">
      <div className="col-md-10 offset-1 text-center">
        <h6 className="my-4">OUR ROOMS</h6>
        <p className="text-muted">
          Our spacious accommodations are excellent for a trip with friends,
          family or as a couple. Each accommodation is fully equipped and
          furnished to create a pleasant and relaxing atmosphere.
        </p>
      </div>
      {data.map((hotel, index) => (
        <React.Fragment key={hotel.id}>
          <div className="col-md-6 my-3">
            <h4 className="mb-4">{hotel.name}</h4>
            <img
              aria-hidden
              alt={hotel.name}
              src={
                "https://source.unsplash.com/random/500x800?hotel=" +
                (3 + index + 1)
              }
              className="img-responsive img-fluid w-100"
            />
            <p className="small text-mutated py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, veritatis eum! Ducimus saepe doloribus voluptate
              voluptas iusto distinctio dolorem inventore omnis quidem, eius
              nihil officia aperiam recusandae unde totam quibusdam?
            </p>
            <h6 className="text-center">Available Types</h6>
            <hr className="hr hr-blurry" />
            <TariffTable tariffs={hotel.tariff} />
            <div className="d-flex justify-content-between mt-3">
              <div className="flex-40 m-auto">
                <MDBBtn
                  color="primary"
                  outline
                  onClick={() => navigate(`${hotel.id}`)}
                >
                  View My Room
                </MDBBtn>
              </div>
              <div className="flex-60">
                <address>{hotel.address}</address>
                <p className="small text-muted">
                  <i className="fa fa-phone"> - {hotel.phone}</i>,
                  <i className="fa fa-envelope"> - {hotel.email}</i>
                </p>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
      {!loading && data.length === 0 && (
        <>
          <div className="no-room">No Room List...</div>
        </>
      )}
    </div>
  );
};

export default HotelRoomsList;
