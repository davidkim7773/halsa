import { useState, useEffect } from 'react';

const MainContainer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    initialData();
  }, []);

  const initialData = async () => {
    const res = await fetch(
      'https://exercisedb.p.rapidapi.com/exercises/name/%7Bname%7D',
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '54ae129187msh083acae926b38a3p140d95jsn67a4fed5efc6',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      }
    );
    if (res.ok) {
      const newData = await res.json();
      setData(newData);
    } else if (!res.ok) {
      const msg = `An issue has occured with fetching data ${res.status}`;
      throw new Error(msg);
    }
  };

  console.log(data);
  return <h1>Main Container</h1>;
};

export default MainContainer;
