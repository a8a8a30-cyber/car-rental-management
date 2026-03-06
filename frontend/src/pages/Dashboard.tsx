import React from 'react';
import { getVehicles } from '../services/api';
import { useQuery } from 'react-query';

const Dashboard = () => {
  const { data, error, isLoading } = useQuery('vehicles', getVehicles);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Vehicles: {data.length}</p>
    </div>
  );
};

export default Dashboard;