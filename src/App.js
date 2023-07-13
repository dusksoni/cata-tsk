import React, { Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import UserLayout from './layout/userLayouts/userLayout';
import NotFound from './components/NotFound';

const DragAndDropPage = React.lazy(() => import("./components/DragAndDropPage"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <Router>
    <UserLayout>
      <Suspense >
        <Routes>
          <Route path="/" element={<Navigate replace to="/Upload" />} />
          <Route path={`/Upload`} element={<DragAndDropPage/>} />
          <Route path={`/Dashboard`} element={<Dashboard/>} />
          <Route path="*" element={<NotFound />}/>
            
         
        </Routes>
      </Suspense>
    </UserLayout>
  </Router>
  );
}

export default App;
