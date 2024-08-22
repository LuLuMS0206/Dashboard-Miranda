import { createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../../data/booking.json";
import { Booking } from "./bookingSlice";
import { getAuthToken } from './../../../auth/auth';

export const BookingsThunk = createAsyncThunk<Booking[]>("bookings/getBookings",async() => {
      const token = getAuthToken();
      const request = await fetch("http://localhost:3001/bookings", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
      });
      const response = await request.json()
      console.log(response);
      return response
    });
