import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ManageImage.css'

const ManageImage = () => {
  const [ManageImage, setManageImage] = useState([])

  useEffect(() => {
    fetch('https://e-noticeboard-server.onrender.com/getImage')
      .then(res => res.json())
      .then(response => {
        setManageImage(response)
      })
  }, [])
const history=useNavigate();
  const handleDownloadLink = () => {
 history("/imageForm");
  }

  const handleDelete = id => {
    fetch(`https://e-noticeboard-server.onrender.com/deleteImage/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          window.location.reload(false)
          window.alert('deleted')
        }
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
                Image
              </th>
              <th className='text-white' scope='col'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {ManageImage.reverse().map((image, index) => (
              <tr>
                <td>
                  <img src={image.imageURL} alt='' />
                </td>
                <td>
                  <div>
                    {image.imageURL ? (
                      <>
                        <td>
                          <button
                            onClick={() => handleDelete(image._id)}
                            className='btn btn-danger'
                          >
                            Delete
                          </button>
                          <button
                            class='btn btn-info ml-2'
                            onClick={handleDownloadLink}
                          >
                            Upload
                          </button>
                        </td>
                      </>
                    ) : (
                      <p></p>
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

export default ManageImage
