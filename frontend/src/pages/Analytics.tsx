import React from 'react';
import { useQuery } from 'react-query';
import { getAnalyticsData } from '../services/api';

const Analytics = () => {
  const { data, error, isLoading } = useQuery('analytics', getAnalyticsData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h2>Analytics and Reports</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Analytics;