import React, { Suspense } from 'react';

const LazyPickCardsData = React.lazy(() => import('./components/PickCardsData'));
const LazyLeagueData = React.lazy(() => import('./components/LeagueData'));
const LazyValueGradeData = React.lazy(() => import('./components/ValueGradeData'));
const LazyValuePicksData = React.lazy(() => import('./components/ValuePicksData'));

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyPickCardsData />
        <LazyLeagueData />
        <LazyValueGradeData />
        <LazyValuePicksData />
      </Suspense>
    </div>
  );
};

export default Page;
