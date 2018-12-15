import React from 'react';


const FormData = () => {
    return (
        <div>
            
            
            <form>
            <div class="container py-3">
              <div class="row">
                 <div class="mx-auto col-sm-9">
                  
                     <div class="card">
                        <div class="card-header">
                            <h4 class="mb-0">User Information</h4>
                        </div>
                        <div class="card-body">
                            <form class="form" role="form" autocomplete="off">
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">First name</label>
                                    <div class="col-lg-6">
                                        <input class="form-control" type="text" required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Last name</label>
                                    <div class="col-lg-6">
                                        <input class="form-control" type="text" required/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Email</label>
                                    <div class="col-lg-6">
                                        <input class="form-control" type="email" required/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Passport Number</label>
                                    <div class="col-lg-6">
                                        <input class="form-control" type="text" required/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Date Of Birth</label>
                                    <div class="col-lg-6">
                                        <input class="form-control" type="date" required/>
                                    </div>
                                </div>
                                
                                <div class="form-group row">
                                    <label class="col-lg-6 col-form-label form-control-label"></label>
                                    <div class="col-lg-12">
                                        <input type="file" class="FileUpload" required/> 
                                        <br></br>
                                        <input type="submit" class="btn btn-primary" value="Submit" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
        </div>
    </div>
</div>
                



</form>
                    </div>
                    );
                }
                
export default FormData;