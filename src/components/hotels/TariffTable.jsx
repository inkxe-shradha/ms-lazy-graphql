import React from "react";

const TariffTable = ({ tariffs }) => {
  return (
    <table className="table table-dark">
      <tbody>
        {tariffs.map((tariff) => (
          <tr key={tariff.id} className="text-center fw-bolder">
            <td>{tariff.roomType}</td>
            <td>${tariff.tariff}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TariffTable;
