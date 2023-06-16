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
    createBoard: builder.mutation({
      query: (board) => ({
        url: '/board',
        method: 'POST',
        body: board,
      }),
      invalidatesTags: ['Boards'],
    }),
    deleteBoard: builder.mutation({
      query: (id) => ({
        url: `/board/${id}`,
        method: 'DELETE',
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
    createTask: builder.mutation({
      query: ({ task, boardId }) => ({
        url: `/task/${boardId}`,
        method: 'POST',
        body: task,
      }),
      invalidatesTags: ['Boards'],
    }),
    deleteTask: builder.mutation({
      query: ({ boardId, taskId }) => ({
        url: `/task/${boardId}/${taskId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Boards'],
    }),
  }),
});

export const {
  useGetBoardsQuery,
  useUpdateBoardMutation,
  useCreateBoardMutation,
  useDeleteBoardMutation,
  useUpdateTaskMutation,
  useCreateTaskMutation,
  useDeleteTaskMutation,
} = apiSlice;
