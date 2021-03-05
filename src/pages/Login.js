import React from 'react'
// import { Link } from 'react-router-dom'
function Login() {
  return (
    <div>
      <button id='btnTheme'>dark</button>
      <h1 className='judul'>Judul</h1>
      <ul id='list'>
        <li>CCI</li>
        <li>WEBDEV</li>
        <li>NETWORK</li>
      </ul>
      <label>Item baru :</label>
      <input type='text' name='' id='newitem' />
      <input type='button' value='Tambah' id='btntambah'></input>
    </div>
  )
}
export default Login
