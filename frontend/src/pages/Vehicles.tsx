import { useQuery } from '@tanstack/react-query';
import { getVehicles } from '../services/api';

const Vehicles = () => {
  const { data, error, isLoading } = useQuery({ queryKey: ['vehicles'], queryFn: getVehicles });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  return (
    <div>
      <h2>Vehicles Management</h2>
      <ul>
        {data.map((vehicle: { id: number; name: string }) => <li key={vehicle.id}>{vehicle.name}</li>)}
      </ul>
    </div>
  );
};

export default Vehicles;