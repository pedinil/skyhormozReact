import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';


class FormData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Firstname: '',
            LastName: '',
            Email: '',
            Passport: '',
            Date: '',
            file: '',
            pictures: [],

        };
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }


    updateInput(event) {
        if (event.target.name === "Firstname") {
            this.setState({ Firstname: event.target.value });
        }
        else if (event.target.name === "Lastname") {
            this.setState({ LastName: event.target.value });
        }

        else if (event.target.name === "Email") {
            this.setState({ Email: event.target.value });
        }
        else if (event.target.name === "Passport") {
            this.setState({ Passport: event.target.value });
        }
        else if (event.target.name === "Date") {
            this.setState({ Date: event.target.value });
        }



        //console.log(this.state);
    }
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div>


                <div class="container py-3">
                    <div class="row">
                        <div class="mx-auto col-sm-9">

                            <div class="card">
                                <div class="card-header">
                                    <h4 class="mb-0">User Information</h4>
                                </div>
                                <div class="card-body">
                                    <form class="form" onSubmit={this.handleSubmit}>
                                        <div class="form-group row">
                                            <label class="col-lg-3 col-form-label form-control-label">First name</label>
                                            <div class="col-lg-6">
                                                <input name='Firstname' class="form-control" type="text" value={this.state.Firstname} onChange={this.updateInput} required />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 col-form-label form-control-label">Last name</label>
                                            <div class="col-lg-6">
                                                <input name='Lastname' class="form-control" type="text" onChange={this.updateInput} value={this.state.LastName} required />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 col-form-label form-control-label">Email</label>
                                            <div class="col-lg-6">
                                                <input name='Email' class="form-control" type="email" onChange={this.updateInput} value={this.state.Email} required />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 col-form-label form-control-label">Passport Number</label>
                                            <div class="col-lg-6">
                                                <input name='Passport' class="form-control" type="text" onChange={this.updateInput} value={this.state.Passport} required />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 col-form-label form-control-label">Date Of Birth</label>
                                            <div class="col-lg-6">
                                                <input name='Date' class="form-control" type="date" onChange={this.updateInput}
                                                    value={this.state.Date}
                                                    required />
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