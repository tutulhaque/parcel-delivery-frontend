import React from "react";
import merchenImg from "../../../assets/location-merchant.png";

const BeMerchent = () => {
  return (
    <div className="p-10 bg-[#03373D] bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat rounded-4xl">
      <section className="grid grid-cols-12 items-center gap-4 text-gray-50">
        <div className="col-span-6">
          <h1 className="text-3xl font-bold py-3">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-3">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="py-3 flex gap-3">
            <button className="btn btn-primary">Become a Merchent</button>
            <button className="btn btn-secondary">Earn With Posti</button>
          </div>
        </div>
        <div className="col-span-6">
          <img src={merchenImg} alt="" />
        </div>
      </section>
    </div>
  );
};

export default BeMerchent;
