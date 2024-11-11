import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayoutBasic from './components/side-bar';
import UserManagement from './pages/userManagements/user-managements';
import AddNewUse from './pages/userManagements/add-new-user';
import Dashboard from './pages/userManagements/dashboard';

function App() {
  return (

    <div>
      <Dashboard />
    </div>
    // <BrowserRouter>
    //   {/* Wrap all routes in the Layout component */}
 
    //   <Routes>
    //     <Route path="/" element={} />
    //     <Route path="/register" element={<AddNewUse />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
