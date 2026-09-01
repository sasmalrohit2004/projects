import React, { useEffect, useState } from 'react'
import api from '../api/axios'

export default function Orders(){
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{ load() },[])
  const load = async ()=>{
    setLoading(true)
    try{ const { data } = await api.get('/api/orders?page=1&limit=50'); setOrders(data.orders || []) }catch(e){ console.error(e) }
    setLoading(false)
  }

  const markDelivered = async (id) =>{
    try{ await api.put(`/api/orders/${id}/deliver`); load() }catch(e){ alert('Failed') }
  }
  const cancel = async (id) =>{
    try{ await api.put(`/api/orders/${id}/cancel`); load() }catch(e){ alert('Failed') }
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">Orders</h1>
      <div className="bg-white p-4 rounded shadow">
        {loading? <div>Loading...</div> : (
          <table className="w-full table-auto">
            <thead><tr><th>ID</th><th>User</th><th>Total</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {orders.map(o=> (
                <tr key={o._id} className="border-t">
                  <td className="p-2">{o._id}</td>
                  <td className="p-2">{o.user?.email || o.user}</td>
                  <td className="p-2">${o.totalPrice}</td>
                  <td className="p-2">{o.isPaid? 'Paid':'Unpaid'} / {o.isDelivered? 'Delivered':''} {o.isCancelled? 'Cancelled':''}</td>
                  <td className="p-2">
                    <a className="text-blue-600 mr-3" href={`/admin/orders/${o._id}`}>View</a>
                    {!o.isDelivered && <button className="mr-2 text-green-600" onClick={()=>markDelivered(o._id)}>Deliver</button>}
                    {!o.isCancelled && <button className="text-red-600" onClick={()=>cancel(o._id)}>Cancel</button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
