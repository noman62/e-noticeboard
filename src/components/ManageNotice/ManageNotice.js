import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageNotice.css';


const ManageNotice = () => {
    const [ManageNotice, setManageNotice] = useState([]);
    useEffect(() => {
        fetch('https://immense-inlet-62545.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageNotice(data))
    }, [])
  
   

    const handleDelete = (id) => {
        fetch(`https://immense-inlet-62545.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                   
                    window.location.reload(false);  
                }
            })

    }
    return (
        <div>

            <div className="sidenav">
                <Link className="nav-link text-white" aria-current="page" to="/updateNotice">All Notices</Link>
                <Link className="nav-link text-white" aria-current="page" to="/form">Upload Notices</Link>
                <Link className="nav-link text-white" aria-current="page" to="/upcomingNotice">Upcoming Notice</Link>
                <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
            </div>

            <div className="main">
                <table className="table border shadow">
                    <thead style={{backgroundColor:'#20B2AA'}}>
                        <tr>
                            <th className="text-white" scope="col">index no</th>
                            <th className="text-white" scope="col">Notice No</th>
                            <th className="text-white" scope="col">batchName</th>
                            <th className="text-white" scope="col">Last Date</th>
                            <th className="text-white" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ManageNotice.reverse().map((product, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{product.noticeNo}</td>
                                <td>{product.batchName}</td>
                                <td>{product.date}</td>
                                <td>
                                    <Link to={`/update/${product._id}`}><button className="btn btn-outline-primary bg-warning mr-2">Edit</button></Link>
                                    <button onClick={() => handleDelete(product._id)} className="btn btn-danger mr-2">Delete</button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ManageNotice;