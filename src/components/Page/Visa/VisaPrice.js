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
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-primary" onClick={onclickEvent}>Contact us</button>
          </div>
        </div>

)


}

export default VisaPrice;