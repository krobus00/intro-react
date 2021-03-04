import React from 'react'
import { Link } from 'react-router-dom'
function Second() {
  return (
    <div>
      <h1>Ini halaman kedua</h1>
      <p>lorem lorem lorem lorem</p>
      <p>lorem lorem lorem lorem</p>
      <p>lorem lorem lorem lorem</p>
      <p>lorem lorem lorem lorem</p>
      <Link to='/'>Pindah halaman utama</Link>
    </div>
  )
}
export default Second
