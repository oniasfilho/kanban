import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getBoards: builder.query({
      query: () => '/board',
      providesTags: ['Boards'],
    }),
    updateBoard: builder.mutation({
      query: (board) => ({
        url: '/board',
        method: 'PUT',
        body: board,
      }),
      invalidatesTags: ['Boards'],
    }),
    updateTask: builder.mutation({
      query: ({ task, boardId }) => ({
        url: `/task/${boardId}`,
        method: 'PUT',
        body: task,
      }),
      invalidatesTags: ['Boards'],
    }),
  }),
});

export const {
  useGetBoardsQuery,
  useUpdateBoardMutation,
  useUpdateTaskMutation,
} = apiSlice;
