import { useQuery } from '@tanstack/react-query';
import { getContracts } from '../services/api';

const Contracts = () => {
  const { data, error, isLoading } = useQuery({ queryKey: ['contracts'], queryFn: getContracts });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  return (
    <div>
      <h2>Contracts Management</h2>
      <ul>
        {data.map((contract: { id: number; title: string }) => <li key={contract.id}>{contract.title}</li>)}
      </ul>
    </div>
  );
};

export default Contracts;