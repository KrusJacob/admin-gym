import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  tagTypes: ["Users", "Statictics"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (limit = 10, page = 1) => `/users`,
      // query: (limit = 10, page = 1) => `/users?_limit=${limit}&_page=${page}`,
      providesTags: ["Users"],
      // transformResponse(response, meta) {
      //   return { response, totalCount: meta.response.headers.get("X-Total-Count") };
      // },
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
