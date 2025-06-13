import React, { useState, useEffect } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [totalNights, setTotalNights] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    if (checkIn && checkOut) {
      const diffTime = new Date(checkOut).getTime() - new Date(checkIn).getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setTotalNights(diffDays > 0 ? diffDays : 0);
      setTotalCost(diffDays > 0 ? diffDays * price : 0);
    } else {
      setTotalNights(0);
      setTotalCost(0);
    }
  }, [checkIn, checkOut, price]);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price} / night</h3>

      <div className="mt-4">
        <label htmlFor="checkIn" className="block font-medium">
          Check-in
        </label>
        <input
          id="checkIn"
          type="date"
          className="border p-2 w-full mt-2 rounded-md"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="checkOut" className="block font-medium">
          Check-out
        </label>
        <input
          id="checkOut"
          type="date"
          className="border p-2 w-full mt-2 rounded-md"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      <div className="mt-4 text-lg font-semibold">
        Total payment: <span>${totalCost}</span>
      </div>

      <button
        className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full hover:bg-green-600 transition"
        disabled={totalNights === 0
