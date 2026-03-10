import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dashboard from './pages/Dashboard';
import Vehicles from './pages/Vehicles';
import Contracts from './pages/Contracts';
import Maintenance from './pages/Maintenance';
import Analytics from './pages/Analytics';
import Layout from './components/layout/Layout';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="contracts" element={<Contracts />} />
            <Route path="maintenance" element={<Maintenance />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;