import { baseApi } from '../api/baseApi';

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ searchTerm, categoryId, page = 1, limit = 10 }) => {
                const params: Record<string, any> = {};

                if (searchTerm !== undefined && searchTerm !== null && searchTerm.trim() !== '') {
                    params.searchTerm = searchTerm;
                }

                if (categoryId !== undefined && categoryId !== null && categoryId.trim() !== '') {
                    params.category = categoryId;
                }

                if (page !== undefined && page !== null) {
                    params.page = page;
                }

                if (limit !== undefined && limit !== null) {
                    params.limit = limit;
                }

                return {
                    method: 'GET',
                    url: '/product',
                    params,
                };
            },
        }),

        // getProducts: builder.query({
        //     query: () => {
        //         return {
        //             method: 'GET',
        //             url: `/product`,
        //         };
        //     },
        // }),

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
