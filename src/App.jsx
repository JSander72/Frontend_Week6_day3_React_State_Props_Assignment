import { useState } from 'react';
import UserProfile from './component/UserProfile.jsx'; 
import MovieList from './component/MovieList.jsx';

const App = () => {
  return (
    <>
      <UserProfile /> 
      <MovieList />
    </>
  );
}

export default App;