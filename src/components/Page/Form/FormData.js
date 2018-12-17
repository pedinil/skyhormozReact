import React,{Component} from 'react';


class FormData extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Firstname: "",
        LastName: "",
        Email:"",
        Passport:"",
        Date:"",
        file:"",        

        
      };
      this.updateInput=this.updateInput.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
    updateInput(event){
        this.setState({Firstname :event.target.value})    /*getting Error when adding other elements for setState */
    }
    handleSubmit(){
        console.log(+this.state.Firstname)        /*cnt console log other states */
    }
  
    render() {
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
                                    <input class="form-control" type="text" onChange={this.updateInput.Firstname}  required />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Last name</label>
                                <div class="col-lg-6">
                                    <input  class="form-control" type="text" onChange={this.updateInput.LastName} required/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Email</label>
                                <div class="col-lg-6">
                                    <input class="form-control" type="email" onChange={this.updateInput.Email} required/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Passport Number</label>
                                <div class="col-lg-6">
                                    <input class="form-control" type="text" onChange={this.updateInput.Passport} required/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Date Of Birth</label>
                                <div class="col-lg-6">
                                    <input class="form-control" type="date" onChange={this.updateInput.Date} required/>
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label class="col-lg-6 col-form-label form-control-label"></label>
                                <div class="col-lg-12">
                                    <input  type="file" class="FileUpload" onChange={this.updateInput.file} required/> 
                                    <br></br>
                                    <input type="submit" class="btn btn-primary" value="Submit" onClick={this.handleSubmit} />
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
       
  
}
  export default FormData;