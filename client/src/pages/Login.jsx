import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { login } = useAuth()
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try{
      await login(email, password)
      navigate('/admin')
    }catch(err){
      setError(err.response?.data?.message || err.message)
    }finally{ setLoading(false) }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="w-full max-w-md bg-white p-8 rounded shadow" onSubmit={submit}>
        <h2 className="text-2xl mb-4">Admin Login</h2>
        {error && <div className="bg-red-100 text-red-700 p-2 mb-3">{error}</div>}
        <label className="block mb-2">Email
          <input className="w-full p-2 border mt-1" value={email} onChange={e=>setEmail(e.target.value)} /></label>
        <label className="block mb-4">Password
          <input type="password" className="w-full p-2 border mt-1" value={password} onChange={e=>setPassword(e.target.value)} /></label>
        <button className="w-full bg-blue-600 text-white p-2 rounded" disabled={loading}>{loading? 'Signing in...':'Sign in'}</button>
      </form>
    </div>
  )
}
