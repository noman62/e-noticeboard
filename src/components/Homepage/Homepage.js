import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CurrentDate from '../CurrentDate/CurrentDate'
import Screen from '../Screen/Screen'

const Homepage = () => {
  const [notices, setNotices] = useState([])
  const [images, setImage] = useState([])
  const [info, setInfo] = useState([])

  const fetchData = async () => {
    const response = await fetch('https://e-noticeboard-server.onrender.com/notices')
    const data = await response.json()
    setNotices(data)
  }

  const fetchImage = async () => {
    const response = await fetch('https://e-noticeboard-server.onrender.com/getImage')
    const newImage = await response.json()
    setImage(newImage)
  }

  const fetchOfficeInfo = async () => {
    const response = await fetch('https://e-noticeboard-server.onrender.com/getInfo')
    const newInfo = await response.json()
    setInfo(newInfo)
  }

  useEffect(() => {
    fetchData()
    fetchImage()
    fetchOfficeInfo()
  }, [])

  return (
    <div>
      <div class='container-fluid all'>
        <div class='row main-heading'>
          <div class='col-md-8'>
            <img
              class='nstu_logo p-2'
              src='image/Logo_of_Noakhali_Science_and_Technology_University.gif'
              alt='NSTU LOGO'
            />
            <div class='nstu'>
              <h5 class='text-uppercase text-left font-weight-bolder'>
                Noakhali Science and Technology University
              </h5>
              <h5 class='text-uppercase text-left font-weight-bolder'>
                Department of Information and Communication Engineering
              </h5>
            </div>
          </div>
          <div class='col-md-4'>
            <h2 class=' e-notice p-3'>E-NOTICE BOARD</h2>
          </div>
        </div>

        <div class='row mt-3'>
          <div class='col-md-2 '>
            <ul class='notice mt-1'>
              <h4>Notice</h4>
              {notices.map(latest => {
                return (
                  <div>
                    <li style={{ fontSize: '13px' }}>{latest.title}</li>
                  </div>
                )
              })}
            </ul>
            <ul class='notice mt-2'>
              <h6>Info</h6>

              <p>Office: 9:00 AM-4:00 PM</p>
              <p>Launch: 1:00 AM-2:00 PM</p>
              <p>A/C: 0200005277182 </p>
              {info.map(latest => {
                return (
                  <div>
                    <p>{latest.email}</p>
                    <p>
                      {latest.name1}:{latest.number1}{' '}
                    </p>
                    <p>
                      {latest.name2}:{latest.number2}{' '}
                    </p>
                  </div>
                )
              })}
            </ul>
          </div>
          <div class='col-md-8 p-1'>
            <div
              id='demo'
              class='carousel slide'
              data-ride='carousel'
              data-interval='20000'
            >
              <ul class='carousel-indicators'>
                <li data-target='#demo' data-slide-to='0' class='active'></li>
                <li data-target='#demo' data-slide-to='1'></li>
                <li data-target='#demo' data-slide-to='2'></li>
              </ul>

              <div class='carousel-inner'>
                {notices.reverse().map((notice, index) => (
                  <Screen index={index} notice={notice} />
                ))}
              </div>
              <a class='carousel-control-prev' href='#demo' data-slide='prev'>
                <span class='carousel-control-prev-icon'></span>
              </a>
              <a class='carousel-control-next' href='#demo' data-slide='next'>
                <span class='carousel-control-next-icon'></span>
              </a>
            </div>
          </div>
          <div class='col-md-2 mt-1 marquee-image'>
            <h4 class='marquee-heading '>Activities</h4>
            <div class='marqueeTwo'>
              <ul class='marqueeTwo-content text-center'>
                <li>
                  {images.map(item => (
                    <img src={item.imageURL} alt='' />
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div class='row marquee'>
          <div class='col-2   top-time '>
            <p class='text-center pt-2'>Top Notice</p>
          </div>
          <div class='col-8  top-time1'>
            <marquee>
              {notices.map(item => (
                <span className='space' key={item._id}>
                  {item.title}{' '}
                </span>
              ))}
            </marquee>
          </div>
          <div class='col-2 c  top-time '>
            <p class='mb-0'>
              <CurrentDate />
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Homepage
