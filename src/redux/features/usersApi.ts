import { baseApi } from '../api/baseApi';

const usersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => {
                return {
                    // url: `/user/all-users?searchTerm=${srcText}&page=${page}`,
                    url: `/user/all-users`,
                    method: 'GET',
                };
            },
        }),

        getAdmins: builder.query({
            query: () => {
                return {
                    // url: `/admin&searchTerm=${srcText}&page=${page}`,
                    url: '/admin',
                    method: 'GET',
                };
            },
        }),

        createAdmin: builder.mutation({
            query: (payload) => {
                return {
                    url: `/admin`,
                    method: 'POST',
                    body: payload,
                };
            },
        }),

        deleteAdmin: builder.mutation({
            query: (id) => {
                return {
                    url: `/admin/${id}`,
                    method: 'DELETE',
                };
            },
        }),
    }),
});
export const { useGetUsersQuery, useGetAdminsQuery, useCreateAdminMutation, useDeleteAdminMutation } = usersApi;
