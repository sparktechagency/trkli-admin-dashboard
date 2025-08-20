import { baseApi } from '../api/baseApi';

const faqApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getFAQ: builder.query({
            query: () => {
                return {
                    method: 'GET',
                    url: '/faq',
                };
            },
        }),

        createFAQ: builder.mutation({
            query: (payload) => ({
                method: 'POST',
                url: '/faq',
                body: payload,
            }),
        }),

        updateFAQ: builder.mutation({
            query: ({ id, payload }) => {
                return {
                    method: 'PATCH',
                    url: `/faq/${id}`,
                    body: payload,
                };
            },
        }),

        deleteFAQ: builder.mutation({
            query: (id) => ({
                method: 'DELETE',
                url: `/faq/${id}`,
            }),
        }),
    }),
});

export const { useGetFAQQuery, useCreateFAQMutation, useUpdateFAQMutation, useDeleteFAQMutation } = faqApi;
