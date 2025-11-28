import React, { useEffect, useState } from 'react';

const EnhancedNoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://e-noticeboard-server.onrender.com/notices');
      const data = await response.json();
      setNotices(data);
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  const fetchImages = async () => {
    try {
      const response = await fetch('https://e-noticeboard-server.onrender.com/getImage');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchImages();
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % Math.max(notices.length, 1));
    }, 8000);

    return () => {
      clearInterval(timer);
      clearInterval(slideTimer);
    };
  }, [notices.length]);

  const formatTime = () => {
    return currentTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = () => {
    return currentTime.toLocaleDateString('en-US', {
      weekday: isMobile ? 'short' : 'long',
      year: 'numeric',
      month: isMobile ? 'short' : 'long',
      day: 'numeric'
    });
  };

  const chairman = {
    name: "Dr. Abidur Rahman",
    title: "Professor & Chairman",
    email: "abidur@nstu.edu.bd",
    image: "/image/abid.jpeg"
  };

  const facultyMembers = [
    { name: "Dr. Abidur Rahman", title: "Professor & Chairman", email: "abidur@nstu.edu.bd", image: "https://www.nstu.edu.bd/assets/images/avatar/brVpUAsZHT1569510705.jpg" },
    { name: "Dr. Md. Ashikur Rahman Khan", title: "Professor", email: "ashik@nstu.edu.bd", image: "https://i.ibb.co/RyppJR9/IHT-7310-removebg-preview.png" },
    { name: "Dr. Mohammad Amzad Hossain", title: "Associate Professor", email: "amzad@nstu.edu.bd", image: "https://i.ibb.co/Jx9RGY1/Amzad-Sir.jpg" },
    { name: "Dr. Md. Masudur Rahman", title: "Associate Professor", email: "masudur@nstu.edu.bd", image: "https://www.nstu.edu.bd/assets/images/avatar/ckcPCvSmCe1558019112.jpeg" },
    { name: "Zayed-Us-Salehin", title: "Assistant Professor", email: "salehin.fahad@nstu.edu.bd", image: "https://www.nstu.edu.bd/assets/images/avatar/BCY3NmySZ81643038161.jpg" },
    { name: "Sultana Jahan Soheli", title: "Assistant Professor", email: "sjsoheli@nstu.edu.bd", image: "https://www.nstu.edu.bd/assets/images/avatar/bEzabhUI941601267437.JPG" },
    { name: "Tanvir Zaman Khan", title: "Assistant Professor", email: "tzkhan19@nstu.edu.bd", image: "https://www.nstu.edu.bd/assets/images/avatar/BDGmCfZY6d1566835610.jpg" },
    { name: "Dr. Apurba Adhikary", title: "Assistant Professor", email: "apurba@nstu.edu.bd", image: "https://i.ibb.co.com/KzwpL8Vg/Apurbo-Sir.jpg" },
    { name: "Dr. Main Uddin", title: "Assistant Professor", email: "mainuddin.ice@nstu.edu.bd", image: "https://www.nstu.edu.bd/assets/images/avatar/1PcV6TP1IU1558000205.JPG" },
    { name: "Md. Sabbir Ejaz", title: "Assistant Professor", email: "sabbirejaz.ice@nstu.edu.bd", image: "https://i.ibb.co/WzcGh3n/IHT-7325-removebg-preview.png" },
  ];

  const quotes = [
    { text: "স্বপ্ন সেটা নয় যেটা মানুষ ঘুমিয়ে দেখে। স্বপ্ন সেটাই, যেটা পূরণের প্রত্যাশা মানুষকে ঘুমাতে দেয় না", author: "এ পি জে আব্দুল কালাম" },
    { text: "প্রযুক্তির মূল লক্ষ্য আপনাকে বিভ্রান্ত করা নয় বরং তা হলো আপনাকে সেবা দেয়া", author: "উইলিয়াম এস. বুর" },
    { text: "প্রযুক্তি কখনোই ভালো শিক্ষকদেরকে প্রতিস্থাপন করতে পারবে না তবে ভালো শিক্ষকদের হাতে প্রযুক্তি হতে পারে এক অন্যতম পরিবর্তন এর কারণ", author: "জর্জ কউরস" },
    { text: "উদ্দীপনা এবং কুসংস্কারের বিষের দুর্দান্ত প্রতিষেধক হলো বিজ্ঞান", author: "এডাম স্মিথ" },
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      height: isMobile ? 'auto' : '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 50%, #e8eaf6 100%)',
      overflow: isMobile ? 'auto' : 'hidden'
    }}>
      {/* Header */}
      <header style={{ 
        background: 'linear-gradient(90deg, #1a237e 0%, #283593 50%, #3949ab 100%)', 
        color: 'white',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        flexShrink: 0
      }}>
        <div style={{ padding: isMobile ? '12px 16px' : '16px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '12px' : '0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '12px' : '16px', width: isMobile ? '100%' : 'auto' }}>
              <img
                src="/image/Logo_of_Noakhali_Science_and_Technology_University.gif"
                alt="NSTU Logo"
                style={{ 
                  height: isMobile ? '50px' : '70px',
                  width: isMobile ? '50px' : '70px',
                  objectFit: 'contain',
                  background: 'white',
                  borderRadius: '50%',
                  padding: '6px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  flexShrink: 0
                }}
              />
              <div>
                <h1 style={{ fontSize: isMobile ? '14px' : '20px', fontWeight: 'bold', margin: 0, lineHeight: '1.2' }}>
                  Department of Information and Communication Engineering
                </h1>
                <h2 style={{ fontSize: isMobile ? '12px' : '15px', fontWeight: '500', color: '#bbdefb', marginTop: '4px' }}>
                  Noakhali Science and Technology University
                </h2>
              </div>
            </div>
            <div style={{ textAlign: isMobile ? 'center' : 'right', width: isMobile ? '100%' : 'auto' }}>
              <div style={{ 
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: isMobile ? '8px 16px' : '12px 20px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <h3 style={{ fontSize: isMobile ? '16px' : '20px', fontWeight: 'bold', color: '#ffd54f', margin: '0 0 4px 0' }}>
                  E-NOTICE BOARD
                </h3>
                <p style={{ fontSize: isMobile ? '8px' : '10px', color: '#bbdefb', margin: 0 }}>
                  Developed by Noman & Adity (6th Batch), Habib (7th Batch)<br/>
                  Supervised by Prof. Dr. Md. Ashikur Rahman Khan & Md. Sabbir Ejaz
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Fixed Height */}
      <div style={{ 
        flex: 1,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '16px' : '12px',
        padding: isMobile ? '16px' : '12px 20px',
        minHeight: 0,
        overflow: isMobile ? 'visible' : 'hidden'
      }}>
        
        {/* Left Sidebar - Chairman & Faculty */}
        <div style={{ width: isMobile ? '100%' : '18%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Chairman Card */}
          <div style={{ 
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            flexShrink: 0
          }}>
            <div style={{ 
              background: 'linear-gradient(90deg, #2196f3, #3f51b5)',
              color: 'white',
              padding: '8px 12px'
            }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0 }}>👤 Chairman</h3>
            </div>
            <div style={{ padding: '10px' }}>
              <img
                src={chairman.image}
                alt={chairman.name}
                style={{ width: '100%', height: isMobile ? '200px' : '160px', objectFit: 'cover', objectPosition: 'center 20%', borderRadius: '8px', marginBottom: '8px' }}
              />
              <h4 style={{ fontWeight: 'bold', color: '#1a237e', margin: '0 0 2px 0', fontSize: '13px' }}>{chairman.name}</h4>
              <p style={{ fontSize: '11px', color: '#666', margin: '0 0 2px 0' }}>{chairman.title}</p>
              <p style={{ fontSize: '10px', color: '#2196f3', margin: 0 }}>📧 {chairman.email}</p>
            </div>
          </div>

          {/* Faculty Members - Auto Scrolling */}
          <div style={{ 
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            flex: isMobile ? 'none' : 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0,
            height: isMobile ? '400px' : 'auto'
          }}>
            <div style={{ 
              background: 'linear-gradient(90deg, #5e35b1, #8e24aa)',
              color: 'white',
              padding: '8px 12px',
              flexShrink: 0
            }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0 }}>📚 Faculty Members</h3>
            </div>
            <div style={{ 
              padding: '10px',
              overflow: 'hidden',
              flex: 1,
              position: 'relative'
            }}>
              <div className="auto-scroll-faculty">
                {[...facultyMembers, ...facultyMembers].map((faculty, idx) => (
                  <div
                    key={idx}
                    style={{ 
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px',
                      padding: '8px',
                      marginBottom: '8px',
                      display: 'flex',
                      gap: '8px',
                      background: 'white'
                    }}
                  >
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '6px', flexShrink: 0 }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h4 style={{ fontWeight: '600', fontSize: '11px', color: '#1a237e', margin: '0 0 2px 0' }}>
                        {faculty.name}
                      </h4>
                      <p style={{ fontSize: '10px', color: '#666', margin: '0 0 2px 0' }}>{faculty.title}</p>
                      <p style={{ fontSize: '9px', color: '#2196f3', margin: 0, wordBreak: 'break-all' }}>
                        {faculty.email}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Center Left - Notice List & Quotes */}
        <div style={{ width: isMobile ? '100%' : '16%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Current Notices */}
          <div style={{ 
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            flex: isMobile ? 'none' : '0 0 55%',
            height: isMobile ? '300px' : 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ 
              background: 'linear-gradient(90deg, #43a047, #00897b)',
              color: 'white',
              padding: '8px 12px',
              flexShrink: 0
            }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0 }}>📋 Current Notices</h3>
            </div>
            <div style={{ 
              padding: '10px',
              overflowY: 'auto',
              flex: 1
            }}>
              {notices.map((notice, idx) => (
                <div
                  key={idx}
                  style={{ 
                    fontSize: '11px',
                    padding: '8px',
                    background: 'linear-gradient(90deg, #e8f5e9, #e0f2f1)',
                    borderRadius: '6px',
                    borderLeft: '3px solid #43a047',
                    marginBottom: '6px'
                  }}
                >
                  {notice.title}
                </div>
              ))}
            </div>
          </div>

          {/* Quotes Section - Auto Scrolling */}
          <div style={{ 
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            flex: isMobile ? 'none' : 1,
            height: isMobile ? '300px' : 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ 
              background: 'linear-gradient(90deg, #fb8c00, #ef5350)',
              color: 'white',
              padding: '8px 12px',
              flexShrink: 0
            }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0 }}>💡 শিক্ষনীয় উপদেশ</h3>
            </div>
            <div style={{ 
              padding: '10px',
              overflow: 'hidden',
              flex: 1,
              position: 'relative'
            }}>
              <div className="auto-scroll-quotes">
                {[...quotes, ...quotes, ...quotes].map((quote, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      marginBottom: '10px',
                      padding: '8px',
                      background: '#fff3e0',
                      borderRadius: '6px',
                      borderLeft: '3px solid #fb8c00'
                    }}
                  >
                    <p style={{ fontSize: '11px', color: '#424242', margin: '0 0 6px 0', lineHeight: '1.4' }}>
                      "{quote.text}"
                    </p>
                    <p style={{ fontSize: '9px', color: '#757575', textAlign: 'right', margin: 0 }}>
                      - {quote.author}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Center Main - Carousel */}
        <div style={{ flex: isMobile ? 'none' : 1, display: 'flex', alignItems: 'stretch', height: isMobile ? '400px' : 'auto' }}>
          <div style={{ 
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            overflow: 'hidden',
            width: '100%',
            position: 'relative'
          }}>
            <div style={{ height: '100%', background: '#f5f5f5', position: 'relative' }}>
              {notices.length > 0 && notices[currentSlide] && (
                <img
                  src={notices[currentSlide].imageURL || 'https://via.placeholder.com/800x600?text=No+Notice'}
                  alt="Notice"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              )}
              
              {/* Navigation Buttons */}
              <button
                onClick={() => setCurrentSlide((currentSlide - 1 + notices.length) % notices.length)}
                style={{ 
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  padding: '10px 14px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  fontSize: '20px',
                  lineHeight: 1
                }}
              >
                ←
              </button>
              <button
                onClick={() => setCurrentSlide((currentSlide + 1) % notices.length)}
                style={{ 
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  padding: '10px 14px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  fontSize: '20px',
                  lineHeight: 1
                }}
              >
                →
              </button>

              {/* Slide Indicators */}
              <div style={{ 
                position: 'absolute',
                bottom: '12px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '6px'
              }}>
                {notices.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    style={{ 
                      height: '6px',
                      width: idx === currentSlide ? '24px' : '6px',
                      borderRadius: '3px',
                      background: idx === currentSlide ? '#2196f3' : '#9e9e9e',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Activities - Auto Scrolling */}
        <div style={{ width: isMobile ? '100%' : '16%', height: isMobile ? '400px' : 'auto' }}>
          <div style={{ 
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ 
              background: 'linear-gradient(90deg, #7b1fa2, #ec407a)',
              color: 'white',
              padding: '8px 12px',
              flexShrink: 0
            }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0 }}>🎯 Activities</h3>
            </div>
            <div style={{ 
              padding: '10px',
              overflow: 'hidden',
              flex: 1,
              position: 'relative'
            }}>
              <div className="auto-scroll-activities">
                {[...images, ...images].map((item, idx) => (
                  item.imageURL ? (
                    <div
                      key={idx}
                      style={{ 
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        marginBottom: '10px'
                      }}
                    >
                      <img
                        src={item.imageURL}
                        alt={`Activity ${idx + 1}`}
                        style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
                        onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.display = 'none'; }}
                      />
                    </div>
                  ) : null
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ 
        background: 'linear-gradient(90deg, #212121, #1a237e, #212121)',
        color: 'white',
        padding: isMobile ? '8px 16px' : '10px 20px',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.3)',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '8px' : '0' }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            padding: '6px 12px',
            borderRadius: '8px'
          }}>
            <div>
              <p style={{ fontSize: isMobile ? '9px' : '11px', fontWeight: '600', margin: 0 }}>{formatDate()}</p>
              <p style={{ fontSize: isMobile ? '14px' : '16px', fontWeight: 'bold', color: '#ffd54f', margin: 0 }}>{formatTime()}</p>
            </div>
          </div>

          <div style={{ 
            flex: isMobile ? 'none' : 1,
            width: isMobile ? '100%' : 'auto',
            margin: isMobile ? '0' : '0 20px',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
          }}>
            <div style={{ 
              display: 'inline-block',
              animation: 'scroll 30s linear infinite',
              paddingLeft: '100%'
            }}>
              {notices.map((notice, idx) => (
                <span key={idx} style={{ marginRight: '24px', fontSize: isMobile ? '10px' : '12px' }}>
                  <span style={{ color: '#ffd54f' }}>||</span> {notice.title}
                </span>
              ))}
            </div>
          </div>

          <div style={{ 
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            padding: '6px 12px',
            borderRadius: '8px'
          }}>
            <p style={{ fontSize: isMobile ? '9px' : '11px', margin: '0 0 2px 0' }}>
              📧 ice@office.nstu.edu.bd
            </p>
            <p style={{ fontSize: isMobile ? '9px' : '11px', margin: 0 }}>A/C: 0200005277182</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        @keyframes scrollVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        .auto-scroll-faculty {
          animation: scrollVertical 30s linear infinite;
        }

        .auto-scroll-quotes {
          animation: scrollVertical 25s linear infinite;
        }

        .auto-scroll-activities {
          animation: scrollVertical 35s linear infinite;
        }

        .auto-scroll-faculty:hover,
        .auto-scroll-quotes:hover,
        .auto-scroll-activities:hover {
          animation-play-state: paused;
        }
        
        div::-webkit-scrollbar {
          width: 4px;
        }
        div::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        div::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          body {
            overflow-x: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default EnhancedNoticeBoard;