import React, { useEffect, useState } from 'react'
import api from '../api/axios'

export default function Products(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{ load() },[])
  const load = async ()=>{
    setLoading(true)
    try{ const { data } = await api.get('/api/products'); setProducts(data) }catch(e){ console.error(e) }
    setLoading(false)
  }

  const handleDelete = async (id)=>{
    if(!confirm('Delete product?')) return
    try{ await api.delete(`/api/products/${id}`); load() }catch(e){ alert('Failed to delete') }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Products</h1>
        <a className="bg-green-600 text-white px-3 py-1 rounded" href="/admin/products/new">Create</a>
      </div>
      <div className="bg-white p-4 rounded shadow">
        {loading? <div>Loading...</div> : (
          <table className="w-full table-auto">
            <thead><tr><th>Name</th><th>Price</th><th>Actions</th></tr></thead>
            <tbody>
              {products.map(p=> (
                <tr key={p._id} className="border-t">
                  <td className="p-2">{p.name}</td>
                  <td className="p-2">${p.price}</td>
                  <td className="p-2">
                    <a className="text-blue-600 mr-3" href={`/admin/products/${p._id}`}>Edit</a>
                    <button className="text-red-600" onClick={()=>handleDelete(p._id)}>Delete</button>
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
