import { useState, useEffect } from 'react';



export default function useFetch(url,params) {
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(url,{
        method: "GET",
        body: JSON.stringify(params),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return data;
}
