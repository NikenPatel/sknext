import React from 'react';
import PickCardPage from './pickCardpage';



const PickCardsData = async() => {
    const data = await fetch("http://localhost:3000/api/pickcard").then(response => response.json());

  return (
    <section>
      <h2 className='text-3xl font-medium'>Pick Cards Data</h2>
      {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data available</p>} */}
      <PickCardPage data={data}/>
    </section>
  );
};

export default PickCardsData;

