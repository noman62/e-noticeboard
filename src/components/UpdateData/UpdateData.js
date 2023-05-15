import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './UpdateData.css'

const UpdateData = () => {
  const { id } = useParams()
  const [singleData, setSingleData] = useState([])
  const [name1, setName1] = useState([])
  const [email, setEmail] = useState([])
  const [name2, setName2] = useState([])
  const [number1, setNumber1] = useState([])
  const [number2, setNumber2] = useState([])



  useEffect(() => {
    const getOfficeInfo = async () => {
      const { data } = await axios.get(`https://e-noticeboard-server.onrender.com/office/${id}`)
      setSingleData(data)
      // console.log(data)
    }
    getOfficeInfo()
  }, [id])


  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const url = `https://e-noticeboard-server.onrender.com/update/${id}`
    fetch(url, {
      method: 'PUT',
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
      navigate('/')
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
                  name='email'
                  onChange={e => setEmail(e.target.value)}
                  defaultValue={singleData.email}
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
                  name='name1'
                  onChange={e => setName1(e.target.value)}
                  defaultValue={singleData.name1}
                />
              </div>
              <div class='Form-group col-md-4'>
                <input
                  type='text'
                  class='form-control form-control-sm'
                  id='notice-title'
                  name='number1'
                  onChange={e => setNumber1(e.target.value)}
                  defaultValue={singleData.number1}
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
                  name='name2'
                  onChange={e => setName2(e.target.value)}
                  defaultValue={singleData.name2}
                />
              </div>
              <div class='Form-group col-md-4'>
                <input
                  type='text'
                  class='form-control form-control-sm'
                  id='notice-title'
                  name='number2'
                  onChange={e => setNumber2(e.target.value)}
                  defaultValue={singleData.number2}
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

export default UpdateData
