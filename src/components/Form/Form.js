import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Form.css'
const Form = () => {
  const [imageURL, setImageURL] = useState(null)
  const [user, setUser] = useState({
    noticeNo: '',
    title: '',
    batchName: '',
    date: '',
    imageURL: ''
  })

  //Handle form state
  const handleChange = e => {
    const newUserInfo = { ...user }
    newUserInfo[e.target.name] = e.target.value
    setUser(newUserInfo)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { noticeNo, title, batchName, date, imageURL } = user
    const url = `https://e-noticeboard-server.onrender.com/addProduct`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        noticeNo,
        title,
        batchName,
        date,
        imageURL
      })
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
          <Link className='nav-link text-white' aria-current='page' to='/'>
            Home
          </Link>
        </div>
        <div id='upload' className='pt-4 ml-5 mt-5  col-8'>
          <h2>New Upload Notice</h2>
          <hr />
          <form class='upload-form' onSubmit={handleSubmit}>
            <div class='form-row'>
              <div class='form-group col-md-3'>
                <label for='notice-number'>
                  <b>
                    <big>Notice No</big>
                  </b>{' '}
                </label>
              </div>
              <div class='form-group col-md-8'>
                <input
                  type='text'
                  class='form-control form-control-sm'
                  id='notice-number'
                  required
                  placeholder='Type Notice No'
                  name='noticeNo'
                  onChange={handleChange}
                  defaultValue=''
                />
              </div>
            </div>
            <div class='form-row'>
              <div class='form-group col-md-3'>
                <label for='notice-title'>
                  <b>
                    <big>Notice Title</big>
                  </b>
                </label>
              </div>
              <div class='form-group col-md-8'>
                <input
                  type='text'
                  class='form-control form-control-sm'
                  id='notice-title'
                  placeholder='Type The Main Title of Notice'
                  required
                  name='title'
                  onChange={handleChange}
                  defaultValue=''
                />
              </div>
            </div>
            <div class='form-row'>
              <div class='form-group col-md-3'>
                <label for='inputBatch'>
                  <big>
                    <b>Batch</b>
                  </big>
                </label>
              </div>
              <div class='form-group col-md-8'>
                <select
                  id='inputBatch'
                  class='form-control form-control-sm'
                  name='batchName'
                  onChange={handleChange}
                >
                  <option selected>Choose...</option>
                  <option>ALL BATCH</option>
                  <option>ICE 4th BATCH</option>
                  <option>ICE 5th BATCH</option>
                  <option>ICE 6th BATCH</option>
                  <option>ICE 7th BATCH</option>
                  <option>ICE 8th BATCH</option>
                  <option>ICE 9th BATCH</option>
                </select>
              </div>
            </div>
            <div class='form-row'>
              <div class='form-group col-md-3'>
                <label for='lastdate'>
                  <big>
                    <b>Last Date</b>
                  </big>
                </label>
              </div>
              <div class='form-group col-md-8'>
                <input
                  class='form-control form-control-sm'
                  type='date'
                  id=''
                  name='date'
                  onChange={handleChange}
                  defaultValue=''
                />
              </div>
            </div>
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
                  Upload Notice{' '}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
