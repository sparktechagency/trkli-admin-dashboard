import { baseApi } from "../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/category",
        };
      },
    }),

    createCategory: builder.mutation({
      query: (payload) => {
        return {
          method: "POST",
          url: "/category",
          body: payload,
        };
      },
    }),

    updateCategory: builder.mutation({
      query: (data) => {
        return {
          method: "PATCH",
          url: `/category/${data.id}`,
          body: data?.body,
        };
      },
    }),

    deleteCategory: builder.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/category/${id}`,
        };
      },
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
