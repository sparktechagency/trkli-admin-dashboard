import { baseApi } from '../api/baseApi';

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // getProducts: builder.query({
        //   query: ({ searchTerm, category, page, limit }) => {
        //     console.log(searchTerm, category, page, limit);
        //     return {
        //       method: "GET",
        //       url: `/product?searchTerm=${searchTerm}&category=${category}&page=${page}&limit=${limit}`,
        //     };
        //   },
        // }),

        getProducts: builder.query({
            query: () => {
                return {
                    method: 'GET',
                    url: `/product`,
                };
            },
        }),

        createProduct: builder.mutation({
            query: (payload) => {
                return {
                    method: 'POST',
                    url: '/product',
                    body: payload,
                };
            },
        }),

        updateProduct: builder.mutation({
            query: (data) => {
                return {
                    method: 'PATCH',
                    url: `/product/${data.id}`,
                    body: data?.body,
                };
            },
        }),

        deleteProduct: builder.mutation({
            query: (id) => {
                return {
                    method: 'DELETE',
                    url: `/product/${id}`,
                };
            },
        }),
    }),
});

export const { useGetProductsQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation } =
    productsApi;
