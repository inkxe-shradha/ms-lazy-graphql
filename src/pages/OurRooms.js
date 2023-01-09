import { useQuery } from "@apollo/client";
import React from "react";
import { toast } from "react-toastify";
import { FETCH_HOTELS } from "../client/query";
import HotelRoomsList from "../components/hotels/HotelRooms";
import HotelsFilter from "../components/hotels/HotelsFilter";
import Loading from "../components/Loading/Loading";

const OurRooms = () => {
  const hotelQuery = useQuery(FETCH_HOTELS);
  const [hotelList, setHotelList] = React.useState([]);
  const [hotelFilter, setHotelFilter] = React.useState("ALL");
  const onChangeHotelList = (list) => {
    setHotelFilter(list);
  };

  React.useEffect(() => {
    if (hotelQuery.data?.hotels?.length > 0) {
      if (hotelFilter === "ALL") {
        // "https://source.unsplash.com/random/500x800?sig=" + (3 + index + 1)
        const hotels = [...hotelQuery.data.hotels];
        setHotelList(hotels);
      } else {
        const hotels = [...hotelQuery.data.hotels].filter((hotel) => {
          if (hotel.tariff.find((room) => room.roomType === hotelFilter)) {
            return hotel;
          }
        });
        setHotelList(hotels);
      }
    }
  }, [hotelFilter, hotelQuery.data]);
  hotelQuery.error &&
    toast.error(hotelQuery.error.message || "Some thing went wrong!");

  return (
    <div className="my-4">
      <HotelsFilter
        appliedFilter={hotelFilter}
        onChangeFilter={onChangeHotelList}
      />
      <Loading isLoading={hotelQuery.loading} />
      <HotelRoomsList data={hotelList || []} loading={hotelQuery.loading} />
    </div>
  );
};

export default OurRooms;
