import React from "react";

const servicesList = [
  {
    type: "roomService",
    name: "Service 24/24",
    icon: <i className="fas fa-bell-concierge"></i>,
  },
  {
    type: "laundry",
    name: "Laundry And Wash",
    icon: <i className="fa-solid fa-soap"></i>,
  },
  {
    type: "wifi",
    name: " Wifi",
    icon: <i className="fa-solid fa-wifi"></i>,
  },
  {
    type: "locker",
    name: "Personal Locker",
    icon: <i className="fa-solid fa-lock"></i>,
  },
  {
    type: "swimmingPool",
    name: "Swimming pool",
    icon: <i className="fa-solid fa-person-swimming"></i>,
  },
  {
    type: "giftShops",
    name: "Gift Shops",
    icon: <i className="fas fa-gifts"></i>,
  },
];

const RoomServices = ({ amenities }) => {
  const roomServices = [];
  for (const key in amenities) {
    if (Object.hasOwnProperty.call(amenities, key)) {
      const element = amenities[key];
      if (element) {
        const list = servicesList.find((ele) => ele.type === key);
        if (list) {
          roomServices.push({
            icon: list.icon,
            name: list.name,
            type: list.type,
          });
        }
      }
    }
  }
  return (
    <div className="row mb-4">
      <div className="col-md-8 offset-md-2">
        <h3 className="mb-3">Room Services</h3>
        <div className="row">
          {roomServices.map((service) => (
            <div className="col-md-4 my-2" key={service.type}>
              {service.icon} {service.name}
            </div>
          ))}
          {roomServices.length === 0 && (
            <div className="col-md-12">
              <p className="note note-warning">
                No Room Service is Available. Either the Room is closed or not
                available.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomServices;
