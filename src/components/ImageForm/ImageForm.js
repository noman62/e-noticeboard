import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './ImageForm.css'
const ImageForm = () => {
  const [imageURL, setImageURL] = useState(null)
  const [user, setUser] = useState({ imageURL: '' })

  const handleSubmit = e => {
    e.preventDefault()
    const { imageURL } = user
    const url = `https://e-noticeboard-server.onrender.com/addImage`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ imageURL })
    }).then(res => {
      console.log('server side response')
      window.alert('data inserted Successfully')
    })
  }

  const handleImageUpload = event => {
    console.log(event.target.files)
    const imageData = new FormData()
    imageData.set('key', '2906dcc5c0c0e1002829616afd4bb281')
    imageData.append('image', event.target.files[0])

    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then(res => {
        console.log(res.data.data.display_url)
        setImageURL(res.data.data.display_url)
        setUser({ ...user, imageURL: res.data.data.display_url })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='sidenav col-4'>
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
          <Link
            className='nav-link text-white'
            aria-current='page'
            to='/office'
          >
            Officiary
          </Link>
          <Link
            className='nav-link text-white'
            aria-current='page'
            to='/imageForm'
          >
            Activities Image
          </Link>
          <Link className='nav-link text-white' aria-current='page' to='/'>
            Home
          </Link>
        </div>
        <div id='upload' className='pt-4 ml-5 mt-5  col-8'>
          <h2>Upload Image</h2>
          <hr />
          <form class='upload-form' onSubmit={handleSubmit}>
            <div class='form-row'>
              <div class='form-group col-md-3'>
                <label for='image'>
                  <big>
                    <b>Upload Image</b>
                  </big>
                </label>
              </div>
              <div class='form-group col-md-8'>
                <input
                  type='file'
                  class='form-control form-control-sm'
                  id='Image'
                  name='imageURL'
                  onChange={handleImageUpload}
                />
              </div>
            </div>

            <div class='form-row'>
              <div class='form-group col-md-12 text-center'>
                <button type='submit' class='btn btn-primary w-50'>
                  Upload Image
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ImageForm
