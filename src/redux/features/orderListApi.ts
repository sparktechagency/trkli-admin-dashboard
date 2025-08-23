import { baseApi } from '../api/baseApi';

const orderListApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getOrderList: builder.query({
            query: ({ searchText, page }) => {
                return {
                    url: `/order/all-orders?page=${page}&searchTerm=${searchText}`,
                    method: 'GET',
                };
            },
        }),

        changeOrderStatus: builder.mutation({
            query: ({ data }) => {
                return {
                    url: `/order`,
                    method: 'PUT',
                    body: data,
                };
            },
        }),
    }),
});

export const { useGetOrderListQuery, useChangeOrderStatusMutation } = orderListApi;
