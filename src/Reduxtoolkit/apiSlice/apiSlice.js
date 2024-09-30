import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => "products/categories",
    }),
    getCategoryProducts: builder.query({
      query: (category) => `products/category/${category}`
    })
  }),
});

export const { useGetAllCategoriesQuery, useGetCategoryProductsQuery } = productsAPI;