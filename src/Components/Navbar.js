import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = ()=>{
    return(

    <nav>
    <div class="nav-wrapper">
      <Link to="/" class="brand-logo left" >Razorpay</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/CreateOffer">CreateOffer</Link></li>
        <li><Link to="/Customer">Customer</Link></li>
        <li><Link to="/InvoiceLineItem">InvoiceLineItem</Link></li>
        <li><Link to="/InvoiceProcess">InvoiceProcess</Link></li>
        <li><Link to="/OfferSubcription">OfferSubcription</Link></li>
        <li><Link to="/Payments">Payments</Link></li>
        <li><Link to="/PaymentLink">PaymentLink</Link></li>
        <li><Link to="/Routes">Routes</Link></li>
        <li><Link to="/Settlements">Settlements</Link></li>
        
      </ul>
    </div>
  </nav>

    )
}

export default Navbar