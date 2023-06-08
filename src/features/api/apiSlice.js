import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
	endpoints: (builder) => ({
		getBoards: builder.query({
			query: () => '/board',
		})
	})
})

export const {
	useGetBoardsQuery
} = apiSlice;