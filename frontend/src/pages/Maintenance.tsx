import { useQuery } from '@tanstack/react-query';
import { getMaintenanceRecords } from '../services/api';

const Maintenance = () => {
  const { data, error, isLoading } = useQuery({ queryKey: ['maintenanceRecords'], queryFn: getMaintenanceRecords });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  return (
    <div>
      <h2>Maintenance Tracking</h2>
      <ul>
        {data.map((record: { id: number; description: string }) => <li key={record.id}>{record.description}</li>)}
      </ul>
    </div>
  );
};

export default Maintenance;