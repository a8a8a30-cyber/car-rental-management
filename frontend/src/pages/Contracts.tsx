import React from 'react';
import { useQuery } from 'react-query';
import { getContracts } from '../services/api';

const Contracts = () => {
  const { data, error, isLoading } = useQuery('contracts', getContracts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h2>Contracts Management</h2>
      <ul>
        {data.map(contract => <li key={contract.id}>{contract.title}</li>)}
      </ul>
    </div>
  );
};

export default Contracts;