import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function AdminLayout(){
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">EcoWear Admin</h2>
        <nav className="flex flex-col gap-2">
          <NavLink to="/admin" className={({isActive})=>isActive? 'font-semibold':'hover:underline'} end>Dashboard</NavLink>
          <NavLink to="/admin/products" className={({isActive})=>isActive? 'font-semibold':'hover:underline'}>Products</NavLink>
          <NavLink to="/admin/orders" className={({isActive})=>isActive? 'font-semibold':'hover:underline'}>Orders</NavLink>
          <NavLink to="/admin/analytics" className={({isActive})=>isActive? 'font-semibold':'hover:underline'}>Analytics</NavLink>
          <button onClick={handleLogout} className="mt-4 text-left text-sm text-red-300">Logout</button>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <header className="mb-6 flex justify-between items-center">
          <div>Welcome, {user?.name || user?.email}</div>
        </header>
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  )
}
