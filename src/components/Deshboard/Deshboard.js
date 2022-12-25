import React from 'react';

const Deshboard = () => {
    return (
        <div>
            <div class="container-fluid">
    <div class="row">
        <div class="col-md-12 ">
            <div id="mySidebar" class="sidebar">
                <a href="javascript:void(0)" class="closebtn" onClick="closeNav()">×</a>
                <ul>
                    <li><img class="profile-image" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" width="100" height="100" alt=""/></li>
                    <li><a href="#upload" onClick="myFunction()">Upload Notice</a></li>
                    <li><a href="#list-of-notice" onClick="myFunction2()">List of Notices</a></li>
                    <li><a href="#profile" onClick="myFunction3()">Profile</a></li>
                    <li><a href="#edit-profile" onClick="myFunction4()">Edit Profile</a></li>
                </ul>
              </div>
            <div id="main">
                <button class="openbtn" onClick="openNav()">☰ Open Sidebar</button>  
                 
                <div id="upload" class="pt-4">
                    <h2>Upload Notice</h2>
                    <hr/>
                    <form class="upload-form">
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="notice-number">Notice No</label>
                                <input type="text" class="form-control form-control-sm" id="notice-number" required placeholder="Type Notice No"/>
                              </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="notice-title">Notice Title</label>
                                <input type="text" class="form-control form-control-sm" id="notice-title" placeholder="Type The Main Title of Notice" required/>
                              </div>
                              <div class="form-group col-md-6">
                                <label for="short-title">Short Title</label>
                                <input type="text" class="form-control form-control-sm" id="short-title" required placeholder="Type a Short Title"/>
                              </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputBatch">Batch</label>
                                <select id="inputBatch" class="form-control form-control-sm">
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
                            <div class="form-group col-md-6">
                                <label for="lastdate">Last Date</label>
                                <input class="form-control form-control-sm" type="date" name="" id=""/>
                              </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="description">Description</label>
                                <textarea class="form-control form-control-sm" id="exampleFormControlTextarea1" rows="2"></textarea>
                              </div>
                              <div class="form-group col-md-6">
                                <label for="image">Upload Image</label>
                                <input type="file" class="form-control form-control-sm" id="Image"/>
                              </div>
                         
                          </div>
                        <div class="form-row">
                            <div class="form-group col-md-12 text-center">
                                <button type="submit" class="btn btn-primary w-50">Upload Notice </button>
                            </div>
                        </div>
                        
                      </form>
                </div>
                <div id="list-of-notice" class="pt-4">
                    <h2>List of Notice</h2>
                    <hr/>
                    <div class="list-of-notice">
                        <form action="">
                            <div class="form-row">
                                <div class="col-md-2 mb-4">
                            
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                            <span class="input-group-text" id="number">Number </span>
                                            </div>
                                            <input type="number" class="form-control" id="number" placeholder="10" aria-describedby="number" required/>
                                        </div>
                                </div>
                                <div class="offset-md-7 col-md-3">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                        <span class="input-group-text" id="number">Search</span>
                                        </div>
                                        <input type="text" class="form-control" id="number"  aria-describedby="number" required/>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <table class="table table-sm table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Notice NO</th>
                                    <th>Notice Title</th>
                                    <th>Notice's Last Date</th>
                                    <th>Batch</th>
                                    <th></th>
                                  </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>00012</td>
                                    <td>Lorem ipsum dolor sit.</td>
                                    <td>01-03-2033</td>
                                    <td>All</td>
                                    <td><button class="btn btn-sm btn-danger" data-toggle="modal" data-target="#exampleModal">Delete</button></td>
                                  </tr>
                                  <tr>
                                    <td>00012</td>
                                    <td>Lorem ipsum dolor sit.</td>
                                    <td>01-03-2033</td>
                                    <td>All</td>
                                    <td><button class="btn btn-sm btn-danger" data-toggle="modal" data-target="#exampleModal">Delete</button></td>
                                  </tr>
                                  <tr>
                                    <td>00012</td>
                                    <td>Lorem ipsum dolor sit.</td>
                                    <td>01-03-2033</td>
                                    <td>All</td>
                                    <td><button class="btn btn-sm btn-danger" data-toggle="modal" data-target="#exampleModal">Delete</button></td>
                                  </tr>
                                  <tr>
                                    <td>00012</td>
                                    <td>Lorem ipsum dolor sit.</td>
                                    <td>01-03-2033</td>
                                    <td>All</td>
                                    <td><button class="btn btn-sm btn-danger" data-toggle="modal" data-target="#exampleModal">Delete</button></td>
                                  </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Notice NO</th>
                                    <th>Notice Title</th>
                                    <th>Notice's Last Date</th>
                                    <th>Batch</th>
                                    <th></th>
                                  </tr>
                            </tfoot>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                              <li class="page-item"><a class="page-link" href="#">1</a></li>
                              <li class="page-item"><a class="page-link" href="#">2</a></li>
                              <li class="page-item"><a class="page-link" href="#">3</a></li>
                              <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul>
                          </nav>
                        

                    </div>
                    
                </div>
                <div id="profile" class="pt-4">
                    <h2>Profile</h2>
                    <hr/>
                    <div class="profile">
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td><b>Name</b></td>
                                    <td>Lorem ipsum</td>
                                </tr>
                                <tr>
                                    <td><b>Email ID</b></td>
                                    <td>Loremipsum@gmail.com</td>
                                </tr>
                                <tr>
                                    <td><b>Profile Image</b></td>
                                    <td><img class="image-profile" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" srcset=""/></td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    
                </div>
                <div id="edit-profile" class="pt-4">
                    <h2>Profile</h2>
                    <hr/>
                    <div class="edit-profile">
                        
                            <form>
                                <div class="form-group row">
                                  <label for="FName" class="col-sm-2 col-form-label"><b>First Name</b></label>
                                  <div class="col-sm-6">
                                    <input type="text" class="form-control" id="inputfname" required placeholder="First Name"/>
                                  </div>
                                </div>
                                <div class="form-group row">
                                    <label for="LName" class="col-sm-2 col-form-label"><b>Last Name</b></label>
                                    <div class="col-sm-6">
                                      <input type="text" class="form-control" required id="inputlname" placeholder="Last Name"/>
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <label for="Email" class="col-sm-2 col-form-label"><b>Email</b></label>
                                    <div class="col-sm-6">
                                      <input type="email" required class="form-control" id="inputemail" placeholder="Email"/>
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <label for="Password" class="col-sm-2 col-form-label"><b>Password</b></label>
                                    <div class="col-sm-6">
                                      <input type="password" required class="form-control" id="inputpassword" placeholder="Password"/>
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <label for="ConfirmPassword" class="col-sm-2 col-form-label"><b>Confirm Password</b></label>
                                    <div class="col-sm-6">
                                      <input type="password" required class="form-control" id="inputpassword" placeholder=" Confirm Password"/>
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <label for="uploadImage" class="col-sm-2 col-form-label"><b>Upload Image</b></label>
                                    <div class="col-sm-6">
                                      <input type="file" required class="form-control" id="inputImage"/>
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <div class="col-sm-12">
                                        <button class="btn btn-primary">Save Changes</button>
                                    </div>
                                  </div>
                              </form>
                        
                    </div>
                    
                </div>
                    



              </div>
        </div>
    </div>
</div>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal Notice</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            Are you sure you want to delete this notice?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Deshboard;