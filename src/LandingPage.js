import React from "react"
import './LandingPage.css'
import heroImage from './images/hero-desktop.jpg'
import arrow from './images/icon-arrow.svg'
import mobileImage from './images/hero-mobile.jpg'
import logo from './images/logo.svg'

function LandingPage() {
    return (
        <>
            <div className="container">
                <div className="leftColumn">
                    <div className="top">
                        <div className="circle">
                            <img className="logo" src={logo} />
                        </div>



                    </div>
                    <div className="mobileContainer">

                        <img className="mobileImage" src={mobileImage} alt="mobile-image" />
                    </div>
                    <div className="middle">
                        <h1 className="headingTitle">WE'RE</h1>
                        <h1 className="headSubTitle"> COMING</h1>
                        <h1 className="headSubTitle"> SOON</h1>
                        <h3 className="info">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</h3>

                    </div>

                    <form id="form">
                        <input className="emailBox" type="email" id="email" placeholder="Email Address"
                        />
                        <button>
                            <img className="arrowIcon" src={arrow} alt="arrow" />
                        </button>
                    </form>
                    <small>Please provide a valid email</small>

                </div>
                <hero className="heroContainer">
                    <img className="heroImage" src={heroImage} />
                </hero>
            </div>
        </>
    )
}

export default LandingPage