import { createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../../data/booking.json";
import { Booking } from "./bookingSlice";

export const BookingsThunk = createAsyncThunk<Booking[]>(
  "bookings/getBookings",
  async () =>
    new Promise<Booking[]>(async (resolve) => {
      const request = new Request("http://localhost:3001/bookings", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //   "Authorization": `Bearer ${token}`,
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikx1Y2lhIiwiaWF0IjoxNzI0MTczMzk1LCJleHAiOjE3MjQxNzY5OTV9.AEUuCzjr_7g3dn4A4a-rtbl8Y-kTxadhGZ-bzoGtrR4`,
        },
      });

      const response = await fetch(request);
      
      const bookings: Booking[] = await response.json();

      console.log('STATUS ========', response.status);
      console.log('BOOKINGS ========', bookings);
      resolve(response.body as any);
    })
);
