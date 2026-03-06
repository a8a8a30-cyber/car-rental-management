import React from 'react';
import { useQuery } from 'react-query';
import { getMaintenanceRecords } from '../services/api';

const Maintenance = () => {
  const { data, error, isLoading } = useQuery('maintenanceRecords', getMaintenanceRecords);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h2>Maintenance Tracking</h2>
      <ul>
        {data.map(record => <li key={record.id}>{record.description}</li>)}
      </ul>
    </div>
  );
};

export default Maintenance;