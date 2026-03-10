import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="w-64 bg-gray-900 text-white">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/vehicles">Vehicles</Link></li>
        <li><Link to="/contracts">Contracts</Link></li>
        <li><Link to="/maintenance">Maintenance</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;