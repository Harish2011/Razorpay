import React from 'react'

const CreateOffer =()=>{
    return(

        <div className="mycard">
        <h1>CreateOffer</h1>
        <div className="card auth-card">
        <h5>Description</h5>

        <label>Offer Name</label>
        <input type="text" />

        <label>Display Text</label>
        <input type="text" />

        <label>Terms</label>
        <input type="text" />


        <label>Offer Type</label>
        <select class="browser-default">
            <option value="" disabled selected>Please Select</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
        
        <a id="crbtn" class="waves-effect blue btn">Next</a>
        </div>
        </div>
        
    )
}

export default CreateOffer