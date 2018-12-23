import React from 'react'


const VisaPrice= (props) => {

const  onclickEvent = (event) => {

  document.location = "mailto:info@skyhormoz.com"



}

return (

    <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">{props.DisplayContent.title}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{props.DisplayContent.price}<small class="text-muted"></small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Scanned Passport copy </li>
              <li>Valid minimum for 6 months</li>
              <li>Passport Size photographs </li>
              <li>Old visit visa copy</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-primary" onClick={onclickEvent}>Contact us</button>
          </div>
        </div>

)


}

export default VisaPrice;