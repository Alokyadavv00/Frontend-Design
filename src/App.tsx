import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { MainLayout } from "./components/layout/MainLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ScanDetail from "./pages/ScanDetail";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />

      <Routes>
        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Layout routes */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scans" element={<Dashboard />} />
          <Route path="/scans/:id" element={<ScanDetail />} />
          <Route path="/projects" element={<div className="p-4">Projects Stub</div>} />
          <Route path="/schedule" element={<div className="p-4">Schedule Stub</div>} />
          <Route path="/notifications" element={<div className="p-4">Notifications Stub</div>} />
          <Route path="/settings" element={<div className="p-4">Settings Stub</div>} />
          <Route path="/support" element={<div className="p-4">Support Stub</div>} />
        </Route>

        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;