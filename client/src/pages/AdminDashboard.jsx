import React, { useEffect, useState } from 'react'
import api from '../api/axios'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function AdminDashboard(){
  const [stats, setStats] = useState({ totalOrders:0, totalRevenue:0, byStatus: {} })
  const [recent, setRecent] = useState([])

  useEffect(()=>{
    const load = async ()=>{
      try{
        const res = await api.get('/api/orders?limit=5&page=1')
        const orders = res.data.orders || []
        const total = orders.reduce((s,o)=>s+ (o.totalPrice||0),0)
        const byStatus = { paid: orders.filter(o=>o.isPaid).length, delivered: orders.filter(o=>o.isDelivered).length }
        setStats({ totalOrders: res.data.total || orders.length, totalRevenue: total, byStatus })
        setRecent(orders)
      }catch(err){ console.error(err) }
    }
    load()
  },[])

  const data = {
    labels: recent.map(o=>new Date(o.createdAt).toLocaleDateString()),
    datasets: [{ label: 'Order total', data: recent.map(o=>o.totalPrice||0), backgroundColor: 'rgba(34,197,94,0.7)' }]
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow"> <div className="text-sm text-gray-500">Total Orders</div><div className="text-xl">{stats.totalOrders}</div></div>
        <div className="bg-white p-4 rounded shadow"> <div className="text-sm text-gray-500">Total Revenue</div><div className="text-xl">${stats.totalRevenue.toFixed(2)}</div></div>
        <div className="bg-white p-4 rounded shadow"> <div className="text-sm text-gray-500">Paid / Delivered</div><div className="text-xl">{stats.byStatus.paid||0} / {stats.byStatus.delivered||0}</div></div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="mb-2">Recent Orders</h3>
        <Bar data={data} />
      </div>
    </div>
  )
}
