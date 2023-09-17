import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://users-mmkv.onrender.com/",
  }),
  tagTypes: ["Users", "Statictics"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users`,
      providesTags: ["Users"],
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
    changeAbonnementCount: builder.mutation({
      query: ([id, count]) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: {
          abonnementCount: count,
        },
      }),
      invalidatesTags: ["Users"],
    }),
    getStatistics: builder.query({
      query: () => "/statistics",
      providesTags: ["Statictics"],
    }),
    incStatistics: builder.mutation({
      query: ([id, value]) => ({
        url: `/statistics/${id}`,
        method: "PATCH",
        body: { value },
      }),
      invalidatesTags: ["Statictics"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useChangeAbonnementCountMutation,
  useGetStatisticsQuery,
  useIncStatisticsMutation,
} = apiSlice;
