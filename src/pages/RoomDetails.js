import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLazyQuery, useQuery } from "@apollo/client";
import { FETCH_HOTELS, FETCH_HOTEL_BY_ID } from "../client/query";
import Loading from "../components/Loading/Loading";
import { MDBBtn } from "mdb-react-ui-kit";
import "./room.scss";
import HotelBanner from "../components/hotels/HotelBanner";
import HotelDetails from "../components/hotels/HotelDetails";
import RoomServices from "../components/hotels/RoomServices";
import HotelReview from "../components/hotels/HotelReview";

const RoomDetails = () => {
  const params = useParams();
  const [getRooms, { loading, error, data }] = useLazyQuery(FETCH_HOTEL_BY_ID);
  const [hotelName, setHotelName] = React.useState("");
  const navigate = useNavigate();
  const hotelQuery = useQuery(FETCH_HOTELS);
  const hotelService = [
    {
      name: "Size",
      description: "350-425sqf",
    },
    {
      name: "Bed",
      description: "King Size",
    },
    {
      name: "Capacity",
      description: "Max 5-6 Person",
    },
    {
      name: "Services",
      description: "Wifi, television ...",
    },
  ];

  React.useEffect(() => {
    if (params.id) {
      getRooms({
        variables: { id: +params.id },
      });
    }
  }, [getRooms, params.id]);

  const handleSubmit = () => {
    navigate("/our-rooms/" + hotelName);
  };

  if (error) {
    throw new Error(error.message);
  }
  return (
    <>
      <Loading isLoading={loading} />
      <HotelBanner hotel={data?.hotel} />
      <div className="row my-4">
        <div className="col-md-7">
          <img
            aria-hidden
            alt={"Some Name"}
            src={
              "https://source.unsplash.com/random/800x380?hotel=" +
              (3 + params.id)
            }
            className="img-responsive img-fluid w-100"
          />
        </div>
        <div className="col-md-5">
          <div className="card bg-gradient bg-dark">
            <div className="card-header">
              <h3 className="card-title text-center">Check Other Hotels</h3>
            </div>
            <div className="card-body">
              <div className="form-group mb-3">
                <label htmlFor="checkInDate">Date</label>
                <div className="mt-2" id="datepicker">
                  <div className="row gx-0">
                    <div className="col-6">
                      <input
                        type="datetime-local"
                        className="input-small form-control"
                        name="checkInDate"
                        id="checkInDate"
                        placeholder="Check In"
                        spellCheck="false"
                        data-ms-editor="true"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="datetime-local"
                        className="input-small form-control"
                        name="checkOutDate"
                        placeholder="Check Out"
                        spellCheck="false"
                        data-ms-editor="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="guest">
                  Hotel Name <span className="text-danger">*</span>
                </label>
                <div className="row mt-2">
                  <div className="col-6">
                    <select
                      className="form-control form-select bg-dark"
                      value={hotelName}
                      name="hotel-name"
                      onChange={(e) => setHotelName(e.target.value)}
                    >
                      <option>Select Hotel Name</option>
                      {hotelQuery.data?.hotels &&
                        hotelQuery.data.hotels.length > 0 &&
                        hotelQuery.data.hotels.map((hotel) => (
                          <option value={hotel.id} key={hotel.id}>
                            {hotel.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="col-6">
                    <select className="form-control form-select bg-dark">
                      <option>Select Hotel Review</option>
                      <option>Most Recent</option>
                      <option>5 Stars</option>
                      <option>4 Stars</option>
                      <option>3 Stars</option>
                      <option>2 Stars</option>
                      <option>1 Stars</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-8 offset-2 my-4">
                <MDBBtn
                  block
                  color="success"
                  rounded
                  disabled={!hotelName}
                  onClick={handleSubmit}
                >
                  Check the Room
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 offset-2">
          <div className="row">
            {hotelService.map((ser) => (
              <div
                className="col-3 border border-1 text-center p-2"
                key={ser.name}
              >
                <h5 className="text-muted">{ser.name}</h5>
                <p>{ser.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <HotelDetails />
      <RoomServices amenities={data?.hotel.amenities || {}} />
      <HotelReview ratings={data?.hotel.reviews} />
    </>
  );
};

export default RoomDetails;
