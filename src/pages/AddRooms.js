import {
  MDBBtn,
  MDBInput,
  MDBSpinner,
  MDBTextArea,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import React from "react";
import ReactStars from "react-rating-stars-component";
import { generateRandomLat } from "../utils/latitudeLong";
import debouce from "lodash.debounce";
import { hotelValidation } from "../utils/formValidation";
import { useMutation } from "@apollo/client";
import { ADD_HOTELS } from "../client/mutations";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FETCH_HOTELS } from "../client/query";

const AddRooms = () => {
  const [addHotels, { loading, error }] = useMutation(ADD_HOTELS, {
    refetchQueries: [
      {
        query: FETCH_HOTELS,
      },
    ],
  });
  const navigation = useNavigate();
  const [form, setForm] = React.useState({
    name: "",
    address: "",
    rating: 5,
    phone: "",
    email: "",
    country: "",
    pincode: "",
    latitude: "",
    longitude: "",
    checkIn: "",
    checkOut: "",
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    if (hotelValidation(form)) {
      const variables = { ...form };
      addHotels({
        variables: {
          hotel: variables,
        },
      }).then(() => {
        toast.success("Hotel Added Successfully");
        navigation("/our-rooms");
      });
    }
  };

  const handelRatingChange = (e) => {
    setForm({
      ...form,
      rating: e,
    });
  };

  const handelOnchange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "address") {
      const response = await Promise.resolve(generateRandomLat());
      setForm({
        ...form,
        [e.target.name]: e.target.value,
        latitude: response.latitude,
        longitude: response.longitude,
      });
    }
  };

  const debouncedResults = React.useMemo(() => {
    return debouce(handelOnchange, 300);
  }, []);

  if (error) {
    toast.error(error.message);
  }

  React.useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });
  return (
    <div className="row my-4">
      <div className="col-md-8 offset-md-2">
        <div className="card bg-dark">
          <div className="card-header">
            <h3 className="card-title">
              Add a new Hotel
              <button className="text-right float-end btn btn-dark bg-gradient">
                <i className="fas fa-arrow-left"></i> &nbsp; Back
              </button>
            </h3>
          </div>
          <MDBValidation onSubmit={handelSubmit}>
            <div className="card-body row">
              <MDBValidationItem className=" form-white mb-4 col-md-6">
                <MDBInput
                  size="lg"
                  label={
                    <>
                      Hotel Name{" "}
                      <span className="text-danger">
                        <i className="fas fa-asterisk"></i>
                      </span>
                    </>
                  }
                  placeholder="Enter Hotel Name"
                  id="hotel-name"
                  name="name"
                  value={form.name}
                  type="text"
                  onChange={handelOnchange}
                  required
                />
              </MDBValidationItem>
              <MDBValidationItem className=" form-white mb-4 col-6">
                <MDBInput
                  size="lg"
                  label={
                    <>
                      Hotel Email{" "}
                      <span className="text-danger">
                        <i className="fas fa-asterisk"></i>
                      </span>
                    </>
                  }
                  placeholder="Enter Hotel Email"
                  id="hotel-email"
                  name="email"
                  value={form.email}
                  type="email"
                  onChange={handelOnchange}
                  required
                />
              </MDBValidationItem>
              <MDBValidationItem
                className=" form-white mb-4 col-6"
                feedback={""}
              >
                <MDBInput
                  size="lg"
                  label={<>Phone number </>}
                  placeholder="Enter Hotel Number"
                  id="hotel-number"
                  name="phone"
                  maxLength={10}
                  minLength={10}
                  value={form.phone}
                  type="tel"
                  onChange={handelOnchange}
                />
              </MDBValidationItem>
              <MDBValidationItem className=" form-white mb-4 col-6">
                <MDBInput
                  size="lg"
                  label={
                    <>
                      Country{" "}
                      <span className="text-danger">
                        <i className="fas fa-asterisk"></i>
                      </span>
                    </>
                  }
                  placeholder="Enter Country Name"
                  id="hotel-country"
                  name="country"
                  value={form.country}
                  type="text"
                  onChange={handelOnchange}
                  required
                />
              </MDBValidationItem>
              <MDBValidationItem className=" form-white mb-4 col-6" feedback>
                <MDBInput
                  size="lg"
                  label={<>Check In </>}
                  placeholder="Enter Check In Time"
                  id="hotel-checkin"
                  name="checkIn"
                  value={form.checkIn}
                  type="time"
                  onChange={handelOnchange}
                />
              </MDBValidationItem>
              <MDBValidationItem className=" form-white mb-4 col-6" feedback>
                <MDBInput
                  size="lg"
                  label={<>Check out </>}
                  placeholder="Enter Checkout"
                  id="hotel-checkout"
                  name="checkOut"
                  value={form.checkOut}
                  type="time"
                  onChange={handelOnchange}
                />
              </MDBValidationItem>
              <MDBValidationItem className=" form-white mb-4 col-8 offset-2">
                <MDBTextArea
                  size="lg"
                  label={
                    <>
                      Hotel Address{" "}
                      <span className="text-danger">
                        <i className="fas fa-asterisk"></i>
                      </span>
                    </>
                  }
                  placeholder="Enter the address"
                  id="hotel-address"
                  name="address"
                  value={form.address}
                  type="time"
                  onChange={handelOnchange}
                  required
                ></MDBTextArea>
              </MDBValidationItem>
              <div className="col-md-6 offset-md-3 text-center d-flex justify-content-between">
                <h6 className="m-auto">Hotel Ratings</h6>
                <ReactStars
                  count={5}
                  value={form.rating}
                  onChange={handelRatingChange}
                  size={24}
                  activeColor="#ffd700"
                />
              </div>
            </div>
            <div className="card-footer text-center">
              <MDBBtn>
                {loading ? (
                  <>
                    {" "}
                    <MDBSpinner
                      size="sm"
                      role="status"
                      tag="span"
                      className="me-2"
                    />
                    Loading...
                  </>
                ) : (
                  "Save"
                )}
              </MDBBtn>
            </div>
          </MDBValidation>
        </div>
      </div>
    </div>
  );
};

export default AddRooms;
