import React, { useState } from "react";
import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [tab, setTab] = useState("offer");

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-8">
      {/* Left Content */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-4 mt-2 text-gray-700">
          <span className="text-yellow-500 font-semibold">{property.rating} ★</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <img
            src={property.image}
            alt={property.name}
            className="col-span-2 w-full h-96 object-cover rounded-lg"
          />
          {property.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${property.name} image ${idx + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>

        {/* Tabs */}
        <div className="mt-8 border-b border-gray-300">
          <nav className="flex space-x-4">
            <button
              onClick={() => setTab("offer")}
              className={`py-2 px-4 ${tab === "offer" ? "border-b-2 border-blue-600 font-semibold" : "text-gray-600"}`}
            >
              What we offer
            </button>
            <button
              onClick={() => setTab("reviews")}
              className={`py-2 px-4 ${tab === "reviews" ? "border-b-2 border-blue-600 font-semibold" : "text-gray-600"}`}
            >
              Reviews
            </button>
            <button
              onClick={() => setTab("host")}
              className={`py-2 px-4 ${tab === "host" ? "border-b-2 border-blue-600 font-semibold" : "text-gray-600"}`}
            >
              About host
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {tab === "offer" && (
            <>
              <p>{property.description}</p>
              <h3 className="mt-6 text-2xl font-semibold">Amenities</h3>
              <ul className="flex flex-wrap gap-3 mt-2">
                {property.category.map((amenity, idx) => (
                  <li key={idx} className="bg-gray-200 p-2 rounded-md">{amenity}</li>
                ))}
              </ul>
            </>
          )}
          {tab === "reviews" && <ReviewSection reviews={property.reviews} />}
          {tab === "host" && (
            <div>
              <h3 className="text-xl font-semibold">{property.host.name}</h3>
              <p className="mt-2">{property.host.about}</p>
            </div>
          )}
        </div>
      </div>

      {/* Right Booking Section */}
      <div className="w-full md:w-96 sticky top-24 self-start">
        <BookingSection price={property.pricePerNight} />
      </div>
    </div>
  );
};

export default PropertyDetail;
