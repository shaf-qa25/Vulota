import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import "./app.css"
const PageInfo = ({ name }) => (
  <div className="flex items-center justify-center h-[80vh]">
    <h1 className="text-3xl font-bold text-slate-700">{name} Section Coming Soon</h1>
  </div>
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
      </Routes>
    </Router>
  );
}

export default App;