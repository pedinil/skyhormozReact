import React from 'react';
import ImageUploader from 'react-images-upload';

class FormData extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Hotelname:'',
            HotelLocation:'',
            Description:'',
            pictures:[],

        };
        this.updateInput=this.updateInput.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.onDrop=this.onDrop.bind(this);
    }
    onDrop(picture){
        this.setState({
            pictures:this.setState.pictures.concat(picture),
        });
        
    }
    updateInput(event){
        if(event.target.name==="Hotelname"){
            this.setState({Hotelname:event.target.value})
        }
        else if(event.target.name==="HotelLocation"){
            this.setState({HotelLocation:event.target.value})
        }
        else if(event.target.name==="Description"){
            this.setState({Description:event.target.value})
        }
    }
    handleSubmit(event){
        console.log(this.state);
        event.preventDefault();
    }
    render(){
    return(
        <div>


        <div class="container py-3">
            <div class="row">
                <div class="mx-auto col-sm-9">

                    <div class="card">
                        <div class="card-header">
                            <h4 class="mb-0">Hotel Information</h4>
                        </div>
                        <div class="card-body">
                            <form class="form" onSubmit={this.handleSubmit}>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Hotel Name</label>
                                    <div class="col-lg-6">
                                        <input name='Hotelname' class="form-control" type="text" value={this.state.Hotelname} onChange={this.updateInput} required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Hotel Location</label>
                                    <div class="col-lg-6">
                                        <input name='HotelLocation' class="form-control" type="text" onChange={this.updateInput} value={this.state.HotelLocation} required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Description</label>
                                    <div class="col-lg-6">
                                        
                                        <textarea class="form-control" id="Description" rows="3" onChange={this.updateInput} value={this.state.Description}></textarea>
                                    </div>
                                </div>
                                
                                <div class="form-group row">
                                    <label class="col-lg-6 col-form-label form-control-label"></label>
                                    <div class="col-lg-12">

                                        <ImageUploader
                                            withIcon={true}
                                            buttonText='Choose images'
                                            onChange={this.onDrop}
                                            withPreview='true'
                                            imgExtension={['.jpg', '.gif', '.png', '.gif','.jpeg']}
                                            maxFileSize={5242880}
                                        />

                                        <br></br>
                                        <input name='Submit' class="btn btn-primary" type="submit" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    );
}
}
export default FormData;