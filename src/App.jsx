import { useState, useEffect } from 'react';
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';

import Header from "./components/header/Header";
import Footer from "./components/header/Header";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/pageNotFound";


function App() {
  const dispatch = useDispatch();

  const {url} = useSelector((state) => state.home);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular')
      .then((res) => {
        dispatch(getApiConfiguration(res));
      })
  };

  return (
    <div>
      App
      {url?.total_pages}
    </div>
  );
}

export default App;
