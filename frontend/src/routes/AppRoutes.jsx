import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import Dashboard from "../pages/Dashboard"
// import ItemDetail from "../pages/ItemDetail"
// import AddItem from "../pages/AddItem"
// import AdminPanel from "../pages/AdminPanel"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/item/:id" element={<ItemDetail />} />
      <Route path="/add-item" element={<AddItem />} />
      <Route path="/admin" element={<AdminPanel />} /> */}
    </Routes>
  )
}

export default AppRoutes
