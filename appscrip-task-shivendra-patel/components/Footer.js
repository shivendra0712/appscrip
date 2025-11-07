import React from "react";


const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-top">
                <div className="footer-newsletter">
                    <h3>BE THE FIRST TO KNOW</h3>
                    <p>Sign up for updates from mettā muse.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your e-mail..." />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>

                <div className="footer-contact">
                    <h4>CONTACT US</h4>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>

                    <h4 className="currency-heading">CURRENCY</h4>
                    <div className="currency">
                        <img src="/images/footer-country-flag.png" alt="USA Flag" />
                        <span>+USD</span>
                    </div>
                    <small>
                        Transactions will be completed in Euros and a currency reference is
                        available on hover.
                    </small>
                </div>
            </div>

            <hr className="divider" />


            <div className="footer-links">
                <div className="footer-column">
                    <h4>mettā muse</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Stories</li>
                        <li>Artisans</li>
                        <li>Boutiques</li>
                        <li>Contact Us</li>
                        <li>EU Compliances Docs</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li>Orders & Shipping</li>
                        <li>Join/Login as a Seller</li>
                        <li>Payment & Pricing</li>
                        <li>Return & Refunds</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                <div className="footer-column follow">
                    <h4>FOLLOW US</h4>
                    <div className="social-icons">
                        <img src="/images/insta.png" alt="instragram" />
                        <img className="linkedin"  src="/images/linkedIn.png" alt="linkedin" />
                    </div>

                    <h4>mettā muse ACCEPTS</h4>
                    <div className="payment-icons">
                        <img className="gpay" src="/images/gpay.png" alt="Google Pay" />
                        <img className="visa" src="/images/visa.png" alt="Visa" />
                        <img src="/images/paypal.png" alt="PayPal" />
                        <img src="/images/amex.png" alt="Amex" />
                        <img src="/images/applepay.png" alt="Apple Pay" />
                        <img src="/images/dpay.png" alt="D Pay" />
                    </div>
                </div>
            </div>


            <div className="footer-bottom">
                <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
