import React from "react";
import OffersComponent from "../components/offers/OffersComponet";

const staticOffersRoom = [
  {
    title: "Free Basket Included",
    image: "https://source.unsplash.com/random/500x400?hotel=1",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis praesentium perferendis ducimus sed. Praesentium deleniti ipsum iure. Libero tenetur iusto nesciunt qui quasi est minima, laudantium tempora, iste, fuga illum.",
  },
  {
    title: "10% on our advance booking",
    image: "https://source.unsplash.com/random/500x400?hotel=2",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis praesentium perferendis ducimus sed. Praesentium deleniti ipsum iure. Libero tenetur iusto nesciunt qui quasi est minima, laudantium tempora, iste, fuga illum.",
  },
  {
    title: "15% off refundable booking",
    image: "https://source.unsplash.com/random/500x400?hotel=3",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis praesentium perferendis ducimus sed. Praesentium deleniti ipsum iure. Libero tenetur iusto nesciunt qui quasi est minima, laudantium tempora, iste, fuga illum.",
  },
];

const Home = () => {
  return (
    <>
      <div className="row my-3">
        <div className="col-md-6 offset-md-3 text-center">
          <h5 className="my-3">Urban & Unique</h5>
          <h2 className="mb-2">The signature services and wonders of Prague</h2>
          <p className="text-white-50 my-3">
            Our accommodations are excellent for a trip with friends, family or
            as a couple
          </p>
          <p>
            The concept and service of the best luxury hotels in Asturias in our
            sophisticated Urban Double and Unique Junior Suite rooms, with the
            possibility of enjoying a furnished terrace in our Double Urban Loft
            and Unique Junior Loft Suite.
          </p>
        </div>
      </div>
      <div className="row my-3">
        <h5 className="text-center my-3">Offers</h5>
        {staticOffersRoom.map((offer) => (
          <div className="col-md-4 col-lg-4">
            <OffersComponent {...offer} key={offer.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
