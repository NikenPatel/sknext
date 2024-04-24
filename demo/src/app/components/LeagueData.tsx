import React from 'react';
import LeaguePage from './LeaguePage';

const LeagueData = async() => {

    const data = await fetch("http://localhost:3000/api/league").then(response => response.json());


  return (
    <section>
      <h2 className='text-3xl font-medium'>League Data</h2>
      <LeaguePage leagueData={data} />
    </section>
  );
};

export default LeagueData;

