import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EmptyBoard from '../component/EmptyBoard';
import LateralNavbar from '../component/LateralNavbar';
import Columns from '../component/Columns';
import { useGetBoardsQuery } from '../features/api/apiSlice';
import { select, setBoards } from '../features/content/contentSlice';

function Home() {
  const { currentBoard } = useSelector((state) => state.content);
  const dispatch = useDispatch();
  const {
    data,
    isLoading,
    isError,
    // error
  } = useGetBoardsQuery();

  useEffect(() => {
    if (currentBoard === null && data !== undefined && data !== null) {
      dispatch(select(data[0]));
      dispatch(setBoards(data));
    } else {
      if (!isLoading && !isError && data) {
        dispatch(setBoards(data));
      }
      if (!isLoading && !isError && data && currentBoard === null) {
        dispatch(select(data[0]));
      }
      if (!isLoading && !isError && data && currentBoard !== null) {
        dispatch(select(data.find((each) => each.boardId === currentBoard?.boardId)));
      }
    }
  }, [data, currentBoard, dispatch, isError, isLoading]);

  return (
    <div className="home-wrapper">
      <LateralNavbar />
      {currentBoard?.columns.length > 0
			  ? <Columns />
			  : <EmptyBoard />}
    </div>
  );
}

export default Home;
