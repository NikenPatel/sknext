import React from 'react';
import ValuePicksPage from './ValuePicksPage';


const ValuePicksData = async() => {

    const data = await fetch("http://localhost:3000/api/valuepick").then(response => response.json());

  return (
    <section>
      <h2 className='text-3xl font-medium'>Value Picks Data</h2>
      <ValuePicksPage valuePickData={data} />
      {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data available</p>} */}
    </section>
  );
};

export default ValuePicksData;

