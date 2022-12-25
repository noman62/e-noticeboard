import React from 'react';

const Login = () => {
    return (
        <div>
            <div class="container-fluid login ">
        <div class="rows">
            <div class="col-sm-12  ">
                
                <div class="container dept ">
                    <div class="row">
                        <div class="col-sm-5 p-5 text-center">
                            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, illum? Voluptatibus consequatur optio numquam, dolores saepe temporibus. Dolorem, saepe modi.</p>
                            <hr/>

                        </div>
                        <div class="col-sm-7 p-5 text-center">
                            <h1 class="mb-4">Log In</h1>
                            <form>
                                <div class="input-group mb-3 input-group-md">
                                  <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
                                  </div>
                                  <input type="text" class="form-control" placeholder="User Email ID"/>
                                </div>
                                <div class="input-group mb-3 input-group-md">
                                    <div class="input-group-prepend">
                                      <span class="input-group-text"><i class="fa-solid fa-lock"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Password"/>
                                  </div>
                                  <div class="form-check">
                                    <input type="text"/>
                                  </div>
                                  <div>
                                      <button type="submit" class="btn btn-md login-btn m-3">Log In</button>
                                  </div>
                              </form>
                            

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
        </div>
    );
};

export default Login;