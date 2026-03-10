import { useQuery } from '@tanstack/react-query';
import { getAnalyticsData } from '../services/api';

const Analytics = () => {
  const { data, error, isLoading } = useQuery({ queryKey: ['analytics'], queryFn: getAnalyticsData });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  return (
    <div>
      <h2>Analytics and Reports</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Analytics;