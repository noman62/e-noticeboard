import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ManageNotice.css'
import fileDownload from 'js-file-download'
import axios from 'axios'

const ManageNotice = () => {

  const [ManageNotice, setManageNotice] = useState([])

  useEffect(() => {
    fetch('https://e-noticeboard-server.onrender.com/allNotice')
      .then(res => res.json())
      .then(response => {
        setManageNotice(response)
      })
  }, [])

  const handleViewLink = image => {
    window.open(image, '_blank')
  }

  const handleDownloadLink = link => {
    axios
      .get(link, { responseType: 'blob' })
      .then(response => {
        const fileName = 'downloaded_image.jpg'
        fileDownload(response.data, fileName)
      })
      .catch(error => {
        console.error(error)
      })
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
                Notice No
              </th>
              <th className='text-white' scope='col'>
                batchName
              </th>
              <th className='text-white' scope='col'>
                Last Date
              </th>
              <th className='text-white' scope='col'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {ManageNotice.reverse().map((product, index) => (
              <tr>
                <td>{product.noticeNo}</td>
                <td>{product.batchName}</td>
                <td>{product.date}</td>
                <td>
                  <div>
                    {product.imageURL ? (
                      <>
                        <button
                          type='button'
                          class='btn btn-success'
                          onClick={() => handleViewLink(product.imageURL)}
                        >
                          View
                        </button>
                        <button
                          class='btn btn-info ml-2'
                          onClick={() => handleDownloadLink(product.imageURL)}
                        >
                          Download
                        </button>
                      </>
                    ) : (
                      <p>Loading link data...</p>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageNotice
