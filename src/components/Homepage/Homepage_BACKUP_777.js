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
          <div class='col-md-10'>
            <img
              class='nstu_logo p-2'
              src='image/Logo_of_Noakhali_Science_and_Technology_University.gif'
              alt='NSTU LOGO'
            />
            <div class='nstu'>
            <h4 class='text-uppercase text-left font-weight-bolder'>
                Department of Information and Communication Engineering
              </h4>
              <h5 class='text-uppercase text-left font-weight-bolder'>
                Noakhali Science and Technology University
              </h5>
            </div>
          </div>
          <div class='col-md-4'>
            <h2 class=' e-notice p-3'>E-NOTICE BOARD</h2>
          </div>
        </div>

        <div class='row mt-3'>
        <div class='col-md-2 mt-1 marquee-image'>
            <h4 class='marquee-heading font-weight-bolder'>Faculty Member</h4>
            <div class='marqueeTwo'>
              <ul class='marqueeTwo-content1 text-center'>
                <li>
                <div class="card">
                <img src="https://i.ibb.co/zmSTM3F/Ashik-Sir.jpg"  alt="..."/>
                <div class="card-body p-0">
                  <h6 class='font-weight-bold'>Dr. Md. Ashikur Rahman Khan</h6>
                  <p class="mb-0">Professor & Chairman</p>
                  <p>Email: ashik@nstu.edu.bd</p>            
                </div>
              </div>
                </li>
                <li>
                <div class="card">
                <img src="https://www.nstu.edu.bd/assets/images/avatar/brVpUAsZHT1569510705.jpg" class="card-img-top" alt="..."/>
                <div class="card-body p-0">
                  <h6 class='font-weight-bold'>Dr. Abidur Rahman <small>(Study Leave)</small></h6>
                  <p class="mb-0">Associate Professor</p>
                  <p>Email: abidur@nstu.edu.bd</p>            
                </div>
              </div>
                </li>
                <li>
                <div class="card">
                <img src="https://i.ibb.co/Jx9RGY1/Amzad-Sir.jpg" class="card-img-top" alt="..."/>
                <div class="card-body p-0">
                  <h6 class='font-weight-bold'>Dr. Mohammad Amzad Hossain</h6>
                  <p class="mb-0">Associate Professor</p>
                  <p>Email: amzad@nstu.edu.bd</p>            
                </div>
              </div>
                </li>
                <li>
                <div class="card">
                <img src="https://www.nstu.edu.bd/assets/images/avatar/ckcPCvSmCe1558019112.jpeg" class="card-img-top" alt="..."/>
                <div class="card-body p-0">
                  <h6 class='font-weight-bold'>Dr. Md. Masudur Rahman </h6>
                  <p class="mb-0">Assosiate Professor</p>
                  <p>Email: masudur@nstu.edu.bd</p>            
                </div>
              </div>
                </li>
                <li>
                <div class="card">
                <img src="https://www.nstu.edu.bd/assets/images/avatar/BCY3NmySZ81643038161.jpg" class="card-img-top" alt="..."/>
                <div class="card-body p-0">
                  <h6 class='font-weight-bold'>Zayed-Us-Salehin <small>(Study Leave)</small></h6>
                  <p class="mb-0">Assistant Professor</p>
                  <p>Email: salehin.fahad@nstu.edu.bd</p>            
                </div>
              </div>
                </li>
                <li>
                <div class="card">
                <img src="https://www.nstu.edu.bd/assets/images/avatar/QQ78QwpjNY1645367505.jpg" class="card-img-top" alt="..."/>
                <div class="card-body p-0">
                  <h6 class='font-weight-bold'>K. M. Aslam Uddin</h6>
                  <p class="mb-0">Assistant Professor</p>
                  <p>Email: aslam@nstu.edu.bd</p>            
                </div>
              </div>
                </li>
                <li>
                <div class="card">
                <img src="https://www.nstu.edu.bd/assets/images/avatar/bEzabhUI941601267437.JPG" class="card-img-top" alt="..."/>
                <div class="card-body p-0">
                  <h6 class='font-weight-bold'>Sultana Jahan Soheli</h6>
                  <p class="mb-0">Assistant Professor</p>
                  <p>Email: sjsoheli@nstu.edu.bd</p>            
                </div>
              </div>
                </li>
                <li>
                <div class="card">
                <img src="https://www.nstu.edu.bd/assets/images/avatar/BDGmCfZY6d1566835610.jpg" class="card-img-top" alt="..."/>
                <div class="card-body p-0">
                  <h6 class='font-weight-bold'>Tanvir Zaman Khan</h6>
                  <p class="mb-0">Assistant Professor</p>
                  <p>Email: tzkhan19@nstu.edu.bd</p>            
                </div>
              </div>
                </li>
                <li>
                <div class="card">
                <img src="https://www.nstu.edu.bd/assets/images/avatar/vTPQqLGO9J1580538351.png" class="card-img-top" alt="..."/>
                <div class="card-body p-0">
                  <h6 class='font-weight-bold'>Nishu Nath <small>(Study Leave)</small></h6>
                  <p class="mb-0">Assistant Professor</p>
                  <p>Email: nishunath.ice@nstu.edu.bd</p>            
                </div>
              </div>
                </li>
                <li>
                <div class="card">
                <img src="https://www.nstu.edu.bd/assets/images/avatar/yz6XzLwrGA1597170802.jpg" class="card-img-top" alt="..."/>
                <div class="card-body p-0">
                  <h6 class='font-weight-bold'>Apurba Adhikary <small>(Study Leave)</small></h6>
                  <p class="mb-0">Assistant Professor</p>
                  <p>Email: apurba@nstu.edu.bd</p>            
                </div>
              </div>
                </li>
                <li>
                <div class="card">
                <img src="https://www.nstu.edu.bd/assets/images/avatar/1PcV6TP1IU1558000205.JPG" class="card-img-top" alt="..."/>
                <div class="card-body p-0">
                  <h6 class='font-weight-bold'>Main Uddin <small>(Study Leave)</small></h6>
                  <p class="mb-0">Assistant Professor</p>
                  <p>Email: mainuddin.ice@nstu.edu.bd</p>            
                </div>
              </div>
                </li>
                <li>
                <div class="card">
                <img src="https://www.nstu.edu.bd/assets/images/avatar/Z1ELnQ1NX11577893551.jpg" class="card-img-top" alt="..."/>
                <div class="card-body p-0">
                  <h6 class='font-weight-bold'>Md. Bipul Hossain <small>(Study Leave)</small></h6>
                  <p class="mb-0">Assistant Professor</p>
                  <p>Email: bipul.ice@nstu.edu.bd</p>            
                </div>
              </div>
                </li>
                <li>
                <div class="card">
                <img src="https://www.nstu.edu.bd/assets/images/avatar/7XKLqPEHKI1644176105.JPG" class="card-img-top" alt="..."/>
                <div class="card-body p-0">
                  <h6 class='font-weight-bold'>Md. Mahbubul Alam</h6>
                  <p class="mb-0">Lecturer</p>
                  <p>Email: mahbubulalam@nstu.edu.bd</p>            
                </div>
              </div>
                </li>
                <li>
                <div class="card">
                <img src="https://www.nstu.edu.bd/assets/images/avatar/tHhmBbghTZ1643882363.png" class="card-img-top" alt="..."/>
                <div class="card-body p-0">
                  <h6 class='font-weight-bold'>Md. Sabbir Ejaz</h6>
                  <p class="mb-0">Lecturer</p>
                  <p>Email: sabbirejaz.ice@nstu.edu.bd</p>            
                </div>
              </div>
                </li>
                <li>
                <div class="card">
                <img src="https://www.nstu.edu.bd/assets/images/avatar/WOdxqQFa7T1643992286.jpg" class="card-img-top" alt="..."/>
                <div class="card-body p-0">
                  <h6 class='font-weight-bold'>Mohammad Kamrul Hasan</h6>
                  <p class="mb-0">Lecturer</p>
                  <p>Email: kamrul.ice@nstu.edu.bd</p>            
                </div>
              </div>
                </li>
              </ul>
             
            </div>
          </div>
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
              <p>Lunch: 1:00 AM-2:00 PM</p>
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
          <div class='col-md-6 p-1'>
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
      <footer class='fot1'>
        <div class='row marquee'>
          <div class='col-2 pt-2  top-time '>
            <p class='text-center pt-1'>Top Notice</p>
          </div>
          <div class='col-8 pt-2  top-time1'>
            <marquee>
            <span class='mr-4'>||</span>
              {notices.map(item => (
                <span className='space' key={item._id}>
                  {item.title}{' '}
                  <span class='ml-4'>||</span>
                </span>        
            ))}
            </marquee>
          </div>
          <div class='col-2 c  top-time '>
            <p class='pb-0'>
              <CurrentDate />
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Homepage
