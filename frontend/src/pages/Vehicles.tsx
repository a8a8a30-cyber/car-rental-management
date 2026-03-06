import React from 'react';
import { useQuery } from 'react-query';
import { getVehicles } from '../services/api';

const Vehicles = () => {
  const { data, error, isLoading } = useQuery('vehicles', getVehicles);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h2>Vehicles Management</h2>
      <ul>
        {data.map(vehicle => <li key={vehicle.id}>{vehicle.name}</li>)}
      </ul>
    </div>
  );
};

export default Vehicles;