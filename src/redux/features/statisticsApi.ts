import { baseApi } from '../api/baseApi';

const statisticsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        userStatistics: builder.query({
            query: () => {
                return {
                    url: `/admin/user-statistics`,
                    method: 'GET',
                };
            },
        }),

        sellingStatistics: builder.query({
            query: () => {
                return {
                    url: `/admin/selling-statistics`,
                    method: 'GET',
                };
            },
        }),

        subscriptionStatistics: builder.query({
            query: () => {
                return {
                    url: `/admin/subscription-statistics`,
                    method: 'GET',
                };
            },
        }),
    }),
});

export const { useUserStatisticsQuery, useSellingStatisticsQuery, useSubscriptionStatisticsQuery } = statisticsApi;
