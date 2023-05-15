import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './OfficeForm.css'
const OfficeForm = () => {
  const [user, setUser] = useState({
    email: '',
    name1: '',
    number1: '',
    name2: '',
    number2: ''
  })

  const handleChange = e => {
    const newUserInfo = { ...user }
    newUserInfo[e.target.name] = e.target.value
    setUser(newUserInfo)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { email, name1, number1, name2, number2 } = user
    const url = `https://e-noticeboard-server.onrender.com/officeInfo`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        name1,
        number1,
        name2,
        number2
      })
    }).then(res => {
      console.log('server side response')
      window.alert('data inserted Successfully')
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
          <h2>New Info</h2>
          <hr />
          <form class='upload-form' onSubmit={handleSubmit}>
            <div class='form-row'>
              <div class='form-group col-md-3'>
                <label for='notice-number'>
                  <b>
                    <big>Email</big>
                  </b>{' '}
                </label>
              </div>
              <div class='form-group col-md-8'>
                <input
                  type='email'
                  class='form-control form-control-sm'
                  id='notice-number'
                  required
                  placeholder='Type Email'
                  name='email'
                  onChange={handleChange}
                  defaultValue=''
                />
              </div>
            </div>
            <div class='form-row'>
              <div class='form-group col-md-3'>
                <label for='notice-title'>
                  <b>
                    <big>Name</big>
                  </b>
                </label>
              </div>
              <div class='Form-group col-md-4'>
                <input
                  type='text'
                  class='form-control form-control-sm'
                  id='notice-title'
                  placeholder='Type Name'
                  required
                  name='name1'
                  onChange={handleChange}
                  defaultValue=''
                />
              </div>
              <div class='Form-group col-md-4'>
                <input
                  type='text'
                  class='form-control form-control-sm'
                  id='notice-title'
                  placeholder='Type  Number'
                  required
                  name='number1'
                  onChange={handleChange}
                  defaultValue=''
                />
              </div>
            </div>

            <div class='form-row'>
              <div class='form-group col-md-3'>
                <label for='notice-title'>
                  <b>
                    <big>Name</big>
                  </b>
                </label>
              </div>
              <div class='Form-group col-md-4'>
                <input
                  type='text'
                  class='form-control form-control-sm'
                  id='notice-title'
                  placeholder='Type Name'
                  required
                  name='name2'
                  onChange={handleChange}
                  defaultValue=''
                />
              </div>
              <div class='Form-group col-md-4'>
                <input
                  type='text'
                  class='form-control form-control-sm'
                  id='notice-title'
                  placeholder='Type Number'
                  required
                  name='number2'
                  onChange={handleChange}
                  defaultValue=''
                />
              </div>
            </div>

            <div class='form-row'>
              <div class='form-group col-md-12 text-center'>
                <button type='submit' class='btn btn-primary w-50'>
                  Submit{' '}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OfficeForm
