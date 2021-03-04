import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div>
      <h1>Halaman yang anda tuju tidak ditemukan</h1>
      <Link to='/'>halaman utama</Link>
    </div>
  )
}
export default NotFound
