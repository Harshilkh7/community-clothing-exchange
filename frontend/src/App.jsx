// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import AddItemPage from "./pages/AddItemPage";
import AdminPage from "./pages/AdminPage";
import InfoPage from "./pages/InfoPage";

const App = () => {
  return (
    <>
      {/* Global Navigation */}
      <Navbar />

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* User Pages */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/items/:id" element={<ItemDetailPage />} /> {/* ✅ Fix: Matches /items/:id */}
        <Route path="/add-item" element={<AddItemPage />} />

        {/* Admin Panel */}
        <Route path="/admin" element={<AdminPage />} />

        {/* Static Info Pages */}
       <Route path="/info/:id" element={<InfoPage />} />

      </Routes>

      {/* Global Footer */}
      <Footer />
    </>
  );
};

export default App;
