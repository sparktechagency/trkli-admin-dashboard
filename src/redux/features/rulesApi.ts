import { baseApi } from '../api/baseApi';

const rulesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAboutUs: builder.query({
            query: () => {
                return {
                    method: 'GET',
                    url: '/rule/about',
                };
            },
        }),

        updateAboutUs: builder.mutation({
            query: (data) => {
                return {
                    method: 'POST',
                    url: '/rule/about',
                    body: data,
                };
            },
        }),

        getPrivacyPolicy: builder.query({
            query: () => {
                return {
                    method: 'GET',
                    url: '/rule/privacy-policy',
                };
            },
        }),

        updatePrivacyPolicy: builder.mutation({
            query: (data) => {
                return {
                    method: 'POST',
                    url: '/rule/privacy-policy',
                    body: data,
                };
            },
        }),

        getTermsCondition: builder.query({
            query: () => {
                return {
                    method: 'GET',
                    url: '/rule/terms-and-conditions',
                };
            },
        }),

        updateTermsCondition: builder.mutation({
            query: (data) => {
                return {
                    method: 'POST',
                    url: '/rule/terms-and-conditions',
                    body: data,
                };
            },
        }),
    }),
});

export const {
    useGetAboutUsQuery,
    useUpdateAboutUsMutation,
    useGetPrivacyPolicyQuery,
    useUpdatePrivacyPolicyMutation,
    useGetTermsConditionQuery,
    useUpdateTermsConditionMutation,
} = rulesApi;
