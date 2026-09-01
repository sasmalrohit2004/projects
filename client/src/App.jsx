import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import AdminLayout from './layouts/AdminLayout'
import ProtectedRoute from './components/ProtectedRoute'
import AdminDashboard from './pages/AdminDashboard'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Analytics from './pages/Analytics'

export default function App(){
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/admin" element={<ProtectedRoute><AdminLayout/></ProtectedRoute>}>
        <Route index element={<AdminDashboard/>} />
        <Route path="products" element={<Products/>} />
        <Route path="orders" element={<Orders/>} />
        <Route path="analytics" element={<Analytics/>} />
      </Route>
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  )
}
