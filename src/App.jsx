import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import "./app.css"
import EmptyState from './components/EmptyState';
import ErrorPage from './pages/ErrorPage';


const PageInfo = ({ name }) => (
  <EmptyState
    title={`${name} Module Empty`}
    description={`We couldn't find any ${name.toLowerCase()} records in the database. Please check back later or try refreshing.`}
    actionText="Sync Database"
  />
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<PageInfo name="Analytics" />} />
          <Route path="security" element={<PageInfo name="Security" />} />
          <Route path="users" element={<PageInfo name="Users" />} />
          <Route path="terminal" element={<PageInfo name="Terminal" />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;