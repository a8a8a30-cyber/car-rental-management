import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
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
        <Layout>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/vehicles" component={Vehicles} />
            <Route path="/contracts" component={Contracts} />
            <Route path="/maintenance" component={Maintenance} />
            <Route path="/analytics" component={Analytics} />
          </Switch>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
};

export default App;