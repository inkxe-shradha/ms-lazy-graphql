import { gql } from "@apollo/client";

export const ADD_HOTELS = gql`
  mutation AddHotels($hotel: HotelInput!) {
    addHotel(hotel: $hotel) {
      id
      name
    }
  }
`;
