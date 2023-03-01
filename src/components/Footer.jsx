import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div>
        <section className='info_section layout_padding'>
          <div className='container links_container'>
            <div className='row'>
              <div className='col-md-3'>
                <h3>CUSTOMER SERVICE</h3>
                <ul>
                  <li>
                    <a> International Help </a>
                  </li>
                  <li>
                    <a> Contact Customer Care </a>
                  </li>
                  <li>
                    <a> Return Policy </a>
                  </li>
                  <li>
                    <a> Privacy Policy </a>
                  </li>
                  <li>
                    <a> Shipping Information </a>
                  </li>
                  <li>
                    <a> Promotion Terms </a>
                  </li>
                </ul>
              </div>
              <div className='col-md-3'>
                <h3>LET US HELP YOU</h3>
                <ul>
                  <li>
                    <a> Your Account </a>
                  </li>
                  <li>
                    <a> Your Orders </a>
                  </li>
                  <li>
                    <a> Shipping Rates &amp; Policies </a>
                  </li>
                  <li>
                    <a> Amazon Prime </a>
                  </li>
                  <li>
                    <a> Returns &amp; Replacements </a>
                  </li>
                  <li>
                    <a> Help </a>
                  </li>
                </ul>
              </div>
              <div className='col-md-3'>
                <h3>INFORMATION</h3>
                <ul>
                  <li>
                    <a> About Us </a>
                  </li>
                  <li>
                    <a> Careers </a>
                  </li>
                  <li>
                    <a> Sell on shop </a>
                  </li>
                  <li>
                    <a> Press &amp; News </a>
                  </li>
                  <li>
                    <a> Competitions </a>
                  </li>
                  <li>
                    <a> Terms &amp; Conditions </a>
                  </li>
                </ul>
              </div>
              <div className='col-md-3'>
                <h3>OUR SHOP</h3>
                <ul>
                  <li>
                    <a> Daily Deals </a>
                  </li>
                  <li>
                    <a> App Only Deals </a>
                  </li>
                  <li>
                    <a> Our Hottest Products </a>
                  </li>
                  <li>
                    <a> Gift Vouchers </a>
                  </li>
                  <li>
                    <a> Trending Product </a>
                  </li>
                  <li>
                    <a> Hot Flash Sale </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='follow_container'>
              <div className='row'>
                <div className='col-md-9'>
                  <div className='app_container'>
                    <h3>DOWNLOAD OUR APPS</h3>
                    <div>
                      <img src='/images/google-play.png' alt='' />
                      <img src='/images/apple-store.png' alt='' />
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='info_social'>
                    <div>
                      <a>
                        <img src='/images/fb.png' alt='' />
                      </a>
                    </div>
                    <div>
                      <a>
                        <img src='/images/twitter.png' alt='' />
                      </a>
                    </div>
                    <div>
                      <a>
                        <img src='/images/linkedin.png' alt='' />
                      </a>
                    </div>
                    <div>
                      <a>
                        <img src='/images/instagram.png' alt='' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='container-fluid footer_section'>
          <p>
            Copyright © All Rights Reserved By
            <a href='https://html.design/'>Free Html Templates</a>
          </p>
        </section>
      </div>
    );
  }
}

export default Content;
