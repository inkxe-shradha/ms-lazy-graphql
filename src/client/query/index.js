import { gql } from "@apollo/client";
export const FETCH_HOTELS = gql`
  query Hotels {
    hotels {
      id
      name
      address
      country
      pincode
      rating
      phone
      email
      tariff {
        id
        roomType
        tariff
      }
    }
  }
`;

export const FETCH_HOTEL_BY_ID = gql`
  query GetHotel($id: Int!) {
    hotel(id: $id) {
      id
      name
      address
      country
      pincode
      rating
      phone
      email
      reviews {
        reviewer
        rating
        id
        comments
      }
      tariff {
        id
        roomType
        tariff
      }
      amenities {
        id
        wifi
        wifi
        roomService
        laundry
        locker
        swimmingPool
        giftShops
      }
    }
  }
`;
