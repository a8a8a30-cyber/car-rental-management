import { getVehicles } from '../services/api';
import { useQuery } from '@tanstack/react-query';

const Dashboard = () => {
  const { data, error, isLoading } = useQuery({ queryKey: ['vehicles'], queryFn: getVehicles });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Vehicles: {data.length}</p>
    </div>
  );
};

export default Dashboard;