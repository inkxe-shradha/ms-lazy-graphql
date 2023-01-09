import React from "react";
import "./hotel.scss";
const availableHotelsType = [
  {
    id: 1,
    type: "Deluxe",
  },
  {
    id: 2,
    type: "Executive",
  },
  {
    id: 3,
    type: 'Business Suite"',
  },
  {
    id: 4,
    type: "Executive Pool Facing",
  },
];

const HotelsFilter = ({ appliedFilter, onChangeFilter }) => {
  return (
    <div className="row my-3">
      {availableHotelsType.map((type, index) => (
        <div
          className={`col-md-3 m-auto cursor-pointer h-40px ${
            availableHotelsType.length - 1 !== index && " border-end"
          } ${type.type === appliedFilter ? " active" : ""}`}
          key={type.id}
          onClick={() => onChangeFilter(type.type)}
        >
          <h5 className="text-center">{type.type}</h5>
        </div>
      ))}
    </div>
  );
};

export default HotelsFilter;
