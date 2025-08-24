import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://72.167.221.185:5000/api/v1",
    prepareHeaders: (headers: Headers) => {
      const token = localStorage.getItem("token");
      if (token && token !== "undefined") {
        headers.set("Authorization", `Bearer ${JSON.parse(token)}`)
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export const imageUrl = "http://72.167.221.185:5000";
