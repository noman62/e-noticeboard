import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './OfficeInfo.css'


const OfficeInfo = () => {

  const [OfficeInfo, setOfficeInfo] = useState([])
  let history = useNavigate()
  
  useEffect(() => {
    fetch('https://e-noticeboard-server.onrender.com/getInfo')
      .then(res => res.json())
      .then(response => {
        setOfficeInfo(response)
      })
  }, [])

  const handleUpdate = id => {
    history(`/update/${id}`)
  }

  return (
    <div>
      <div className='sidenav'>
        <Link
          className='nav-link text-white'
          aria-current='page'
          to='/updateNotice'
        >
          All Notices
        </Link>
        <Link className='nav-link text-white' aria-current='page' to='/form'>
          Form
        </Link>
        <Link
          className='nav-link text-white'
          aria-current='page'
          to='/updateImage'
        >
          Activities
        </Link>
        <Link className='nav-link text-white' aria-current='page' to='/office'>
          Officiary
        </Link>
        <Link className='nav-link text-white' aria-current='page' to='/'>
          Home
        </Link>
      </div>

      <div className='main'>
        <table className='table border shadow'>
          <thead style={{ backgroundColor: '#20B2AA' }}>
            <tr>
              <th className='text-white' scope='col'>
                Name
              </th>
              <th className='text-white' scope='col'>
                Number
              </th>
              <th className='text-white' scope='col'>
                Name
              </th>
              <th className='text-white' scope='col'>
                Number
              </th>
              <th className='text-white' scope='col'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {OfficeInfo.map((latest, index) => (
              <tr>
                <td>{latest.name1}</td>
                <td>{latest.number2}</td>
                <td>{latest.name2}</td>
                <td>{latest.number2}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(latest._id)}
                    type='button'
                    class='btn btn-primary'
                  >
                    Update
                  </button>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OfficeInfo
