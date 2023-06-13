import { useState, useEffect } from 'react';
import { fetchDataFromApi } from "./utils/api"; // Update the import statement

function App() {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular')
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      App
    </div>
  );
}

export default App;
