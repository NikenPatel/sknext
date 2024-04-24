import React from 'react';
import ValueGradePage from './ValueGradePage';



const ValueGradeData = async () => {

    const data = await fetch("http://localhost:3000/api/valuegrade").then(response => response.json());

    return (
        <section>
            <h2 className='text-3xl font-medium'>Value Grade Data</h2>
            <ValueGradePage valueGradeData={data} />
            {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data available</p>} */}
        </section>
    );
};

export default ValueGradeData;
